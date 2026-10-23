import { LeadSchema } from './_lead-schema';
import { appendLeadToSheet } from './_sheets';

export const config = {
    runtime: 'edge',
};

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
        // The signups sheet is the only store for leads, so a failed write is an error the visitor can retry.
        const saved = await appendLeadToSheet(parsed.data);
        if (!saved) {
            return new Response(JSON.stringify({ error: 'Failed to process your request. Please try again.' }), {
                status: 500,
                headers,
            });
        }

        return new Response(JSON.stringify({ status: 'success', message: 'Success' }), {
            status: 200,
            headers,
        });
    } catch (error) {
        const e = error as { name?: string; message?: string; code?: string };
        console.error('Lead submission failed', {
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
