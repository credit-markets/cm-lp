import { neon } from '@neondatabase/serverless';

export const config = {
    runtime: 'edge', // Using Edge Runtime for speed
};

export default async function handler(request: Request) {
    // CORS headers
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    };

    // Handle OPTIONS request
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

        const { email, telegram, investment, type } = await request.json();

        if (!email) {
            return new Response(JSON.stringify({ error: 'Email is required' }), {
                status: 400,
                headers
            });
        }

        // Connect to Neon
        const sql = neon(process.env.DATABASE_URL || process.env.POSTGRES_URL!);

        // Create table if it doesn't exist (Safety check)
        // Note: In production, it's better to run migrations separately, but this works for a simple drop-in.
        // Create table if it doesn't exist (Safety check)
        // Note: In production, it's better to run migrations separately, but this works for a simple drop-in.
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

        // Insert user
        await sql`INSERT INTO waitlist (email, telegram, investment, type) VALUES (${email}, ${telegram || ''}, ${investment || ''}, ${type || ''})`;

        return new Response(JSON.stringify({ message: 'Success' }), {
            status: 200,
            headers
        });
    } catch (error) {
        console.error('Waitlist Error:', error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers
        });
    }
}
