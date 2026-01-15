import { neon } from '@neondatabase/serverless';

export const config = {
    runtime: 'edge',
};

let tableInitialized = false;

export default async function handler(request: Request) {
    const origin = request.headers.get('origin') || '';
    const allowedOrigins = [
        'https://credit.markets',
        'https://www.credit.markets',
        'https://dev.credit.markets',
        'http://localhost:8080',
        'http://localhost:3000'
    ];

    const headers = {
        'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : 'https://credit.markets',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    };

    if (request.method === 'OPTIONS') {
        return new Response(null, { status: 204, headers });
    }

    try {
        if (request.method !== 'POST') {
            return new Response(JSON.stringify({ error: 'Method Not Allowed' }), {
                status: 405,
                headers
            });
        }

        let requestData;
        try {
            requestData = await request.json();
        } catch (parseError) {
            console.error('Invalid JSON in request body', {
                error: parseError instanceof Error ? parseError.message : String(parseError),
                contentType: request.headers.get('content-type'),
            });
            return new Response(JSON.stringify({
                error: 'Invalid request format. Please check your data and try again.'
            }), {
                status: 400,
                headers
            });
        }

        const { email, telegram, investment, type } = requestData;

        if (!email) {
            return new Response(JSON.stringify({ error: 'Email is required' }), {
                status: 400,
                headers
            });
        }

        const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;
        if (!databaseUrl) {
            console.error('Database configuration error: DATABASE_URL or POSTGRES_URL environment variable is not set');
            return new Response(
                JSON.stringify({
                    error: 'Service configuration error. Please contact support.',
                }),
                { status: 500, headers }
            );
        }

        const sql = neon(databaseUrl);

        if (!tableInitialized) {
            try {
                await sql`
                    CREATE TABLE IF NOT EXISTS waitlist (
                        id SERIAL PRIMARY KEY,
                        email TEXT NOT NULL,
                        telegram TEXT,
                        investment TEXT,
                        type TEXT,
                        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
                    )
                `;
                tableInitialized = true;
                console.log('Waitlist table initialized successfully');
            } catch (tableError) {
                console.error('Failed to initialize waitlist table', {
                    error: tableError instanceof Error ? tableError.message : String(tableError),
                    stack: tableError instanceof Error ? tableError.stack : undefined,
                });
                throw new Error(`Table initialization failed: ${tableError}`);
            }
        }

        await sql`INSERT INTO waitlist (email, telegram, investment, type) VALUES (${email}, ${telegram || ''}, ${investment || ''}, ${type || ''})`;

        console.log('Waitlist submission successful', { email, timestamp: new Date().toISOString() });

        return new Response(JSON.stringify({ message: 'Success' }), {
            status: 200,
            headers
        });
    } catch (error) {
        console.error('Waitlist submission failed', {
            error: error instanceof Error ? error.message : String(error),
            stack: error instanceof Error ? error.stack : undefined,
            timestamp: new Date().toISOString(),
            requestOrigin: origin,
        });

        let userMessage = 'Failed to process your request. Please try again.';
        let statusCode = 500;

        if (error instanceof Error) {
            const errorMsg = error.message;
            if (errorMsg.includes('connect') || errorMsg.includes('ECONNREFUSED')) {
                userMessage = 'Unable to connect to database. Please try again in a moment.';
                console.error('DATABASE CONNECTION ERROR - check DATABASE_URL and network connectivity');
            } else if (errorMsg.includes('unique') || errorMsg.includes('duplicate')) {
                userMessage = 'This email is already registered on our waitlist.';
                statusCode = 409;
            }
        }

        return new Response(JSON.stringify({
            error: userMessage,
        }), {
            status: statusCode,
            headers
        });
    }
}
