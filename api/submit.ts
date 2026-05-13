import { neon } from '@neondatabase/serverless';
import { z } from 'zod';

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

const emptyToUndefined = (val: unknown) =>
    typeof val === 'string' && val.trim() === '' ? undefined : val;

const WaitlistSchema = z.object({
    email: z.string().trim().toLowerCase().email().max(254),
    telegram: z.preprocess(
        emptyToUndefined,
        z
            .string()
            .trim()
            .max(64)
            .regex(/^@?[A-Za-z0-9_]{3,32}$/, 'Invalid Telegram handle')
            .optional()
    ),
    investment: z.preprocess(
        emptyToUndefined,
        z.string().trim().max(64).optional()
    ),
    type: z.preprocess(
        emptyToUndefined,
        z.enum(['institutional', 'individual']).optional()
    ),
});

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

        const parsed = WaitlistSchema.safeParse(requestData);
        if (!parsed.success) {
            return new Response(
                JSON.stringify({
                    error: 'Invalid input.',
                    fields: parsed.error.flatten().fieldErrors,
                }),
                { status: 400, headers }
            );
        }
        const { email, telegram, investment, type } = parsed.data;

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
            tableInitialized = true;
        }

        const result = await sql`
            INSERT INTO waitlist (email, telegram, investment, type)
            VALUES (${email}, ${telegram ?? null}, ${investment ?? null}, ${type ?? null})
            ON CONFLICT (email) DO NOTHING
            RETURNING id
        `;

        if (result.length === 0) {
            return new Response(
                JSON.stringify({ status: 'duplicate', message: 'Already on the waitlist.' }),
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
