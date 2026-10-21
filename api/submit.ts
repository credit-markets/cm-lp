import { neon } from '@neondatabase/serverless';
import { LeadSchema } from './_lead-schema';

export const config = {
    runtime: 'edge',
};

let tableInitialized = false;

const isProduction = process.env.VERCEL_ENV === 'production';

const baseAllowedOrigins = [
    'https://credit.markets',
    'https://www.credit.markets',
    'https://dev.credit.markets',
];

const allowedOrigins = isProduction
    ? baseAllowedOrigins
    : [...baseAllowedOrigins, 'http://localhost:8080', 'http://localhost:3000'];

// In-memory rate limit. Per-edge-instance only — for production-grade,
// swap for Upstash/Vercel KV. Still useful as a first line of defense.
const RATE_LIMIT = 10;
const RATE_WINDOW_MS = 60_000;
const RATE_MAX_BUCKETS = 5_000;
const rateBuckets = new Map<string, { count: number; reset: number }>();

function rateLimited(ip: string): boolean {
    const now = Date.now();
    const bucket = rateBuckets.get(ip);
    if (!bucket || bucket.reset < now) {
        if (rateBuckets.size >= RATE_MAX_BUCKETS) {
            // Bounded memory: evict oldest expired entries, then drop arbitrary
            // entries if everything is still live. Worst case we let a burst
            // through, which is acceptable for a first-line defense.
            for (const [key, b] of rateBuckets) {
                if (b.reset < now) rateBuckets.delete(key);
                if (rateBuckets.size < RATE_MAX_BUCKETS) break;
            }
            if (rateBuckets.size >= RATE_MAX_BUCKETS) {
                const firstKey = rateBuckets.keys().next().value;
                if (firstKey !== undefined) rateBuckets.delete(firstKey);
            }
        }
        rateBuckets.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
        return false;
    }
    if (bucket.count >= RATE_LIMIT) return true;
    bucket.count += 1;
    return false;
}

function getClientIp(request: Request): string {
    // Vercel sets x-real-ip / x-vercel-forwarded-for from its edge; these
    // are not client-spoofable. Plain x-forwarded-for is, so only use it
    // as a last-resort fallback.
    return (
        request.headers.get('x-real-ip') ||
        request.headers.get('x-vercel-forwarded-for')?.split(',')[0]?.trim() ||
        request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
        'unknown'
    );
}

function buildHeaders(origin: string): HeadersInit {
    const base: Record<string, string> = {
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
        Vary: 'Origin',
    };
    if (allowedOrigins.includes(origin)) {
        base['Access-Control-Allow-Origin'] = origin;
    }
    return base;
}

export default async function handler(request: Request) {
    const origin = request.headers.get('origin') || '';
    const headers = buildHeaders(origin);

    if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers });
    }

    try {
        if (request.method !== 'POST') {
            return new Response(JSON.stringify({ error: 'Method Not Allowed' }), { status: 405, headers });
        }

        const ip = getClientIp(request);
        if (rateLimited(ip)) {
            return new Response(JSON.stringify({ error: 'Too many requests. Please try again later.' }), {
                status: 429,
                headers,
            });
        }

        let requestData: unknown;
        try {
            requestData = await request.json();
        } catch (parseError) {
            console.error('Request body parse failed', {
                name: parseError instanceof Error ? parseError.name : 'unknown',
                message: parseError instanceof Error ? parseError.message : String(parseError),
            });
            return new Response(JSON.stringify({ error: 'Invalid request format.' }), { status: 400, headers });
        }

        const parsed = LeadSchema.safeParse(requestData);
        if (!parsed.success) {
            return new Response(
                JSON.stringify({
                    error: 'Invalid input.',
                    fields: parsed.error.flatten().fieldErrors,
                }),
                { status: 400, headers }
            );
        }
        const { email, role, name, company, country, telegram, investment, type, message, locale } = parsed.data;

        const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;
        if (!databaseUrl) {
            console.error('Database configuration missing');
            return new Response(JSON.stringify({ error: 'Service configuration error.' }), {
                status: 500,
                headers,
            });
        }

        const sql = neon(databaseUrl);

        if (!tableInitialized) {
            await sql`
                CREATE TABLE IF NOT EXISTS waitlist (
                    id SERIAL PRIMARY KEY,
                    email TEXT NOT NULL UNIQUE,
                    telegram TEXT,
                    investment TEXT,
                    type TEXT,
                    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                )
            `;
            // Idempotent retrofit for legacy tables created without the UNIQUE.
            // Intentionally NOT wrapped in EXCEPTION — if duplicates exist this
            // throws loudly so we don't silently end up with a non-existent
            // constraint that ON CONFLICT then fails against on every insert.
            await sql`
                DO $$
                BEGIN
                    IF NOT EXISTS (
                        SELECT 1 FROM pg_indexes
                        WHERE schemaname = 'public'
                          AND tablename = 'waitlist'
                          AND indexname = 'waitlist_email_key'
                    ) THEN
                        ALTER TABLE waitlist ADD CONSTRAINT waitlist_email_key UNIQUE (email);
                    END IF;
                END $$;
            `;
            // Columns added for the investor / originator registration form.
            await sql`
                ALTER TABLE waitlist
                    ADD COLUMN IF NOT EXISTS role TEXT,
                    ADD COLUMN IF NOT EXISTS name TEXT,
                    ADD COLUMN IF NOT EXISTS company TEXT,
                    ADD COLUMN IF NOT EXISTS country TEXT,
                    ADD COLUMN IF NOT EXISTS message TEXT,
                    ADD COLUMN IF NOT EXISTS locale TEXT,
                    ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE
            `;
            tableInitialized = true;
        }

        // A repeat email only fills fields the earlier signup left empty, so an
        // old waitlist entry gains the new details but nobody can overwrite an
        // existing lead by submitting its email.
        const result = await sql`
            INSERT INTO waitlist (email, role, name, company, country, telegram, investment, type, message, locale)
            VALUES (
                ${email}, ${role}, ${name ?? null}, ${company ?? null}, ${country ?? null},
                ${telegram ?? null}, ${investment ?? null}, ${type ?? null}, ${message ?? null}, ${locale ?? null}
            )
            ON CONFLICT (email) DO UPDATE SET
                role = COALESCE(waitlist.role, EXCLUDED.role),
                name = COALESCE(waitlist.name, EXCLUDED.name),
                company = COALESCE(waitlist.company, EXCLUDED.company),
                country = COALESCE(waitlist.country, EXCLUDED.country),
                telegram = COALESCE(waitlist.telegram, EXCLUDED.telegram),
                investment = COALESCE(waitlist.investment, EXCLUDED.investment),
                type = COALESCE(waitlist.type, EXCLUDED.type),
                message = COALESCE(waitlist.message, EXCLUDED.message),
                locale = COALESCE(waitlist.locale, EXCLUDED.locale),
                updated_at = CURRENT_TIMESTAMP
            RETURNING (xmax = 0) AS inserted
        `;

        if (!result[0]?.inserted) {
            return new Response(
                JSON.stringify({ status: 'duplicate', message: 'Already registered.' }),
                { status: 200, headers }
            );
        }

        return new Response(JSON.stringify({ status: 'success', message: 'Success' }), {
            status: 200,
            headers,
        });
    } catch (error) {
        const e = error as { name?: string; message?: string; code?: string };
        console.error('Waitlist submission failed', {
            name: e?.name,
            code: e?.code,
            message: e?.message,
        });
        return new Response(JSON.stringify({ error: 'Failed to process your request. Please try again.' }), {
            status: 500,
            headers,
        });
    }
}
