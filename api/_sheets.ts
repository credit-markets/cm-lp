import type { Lead } from './_lead-schema';

// Appends each new lead to the team's "FIDC Dashboard Signups" sheet, on its own tab.
// Uses the same Google service account as score.credit.markets (credit-model/dashboard/sheets.py):
//   GOOGLE_SHEETS_CREDENTIALS  service-account JSON
//   GOOGLE_SHEET_ID            spreadsheet id
// Never throws: the database row is the source of truth, the sheet is a convenience copy.

const TAB = 'Website';
const HEADER = [
    'Submitted at (UTC)',
    'Role',
    'Name',
    'Email',
    'Company',
    'Country',
    'Investor type',
    'Allocation / monthly volume',
    'Telegram',
    'Message',
    'Language',
    'Source',
];
const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const TIMEOUT_MS = 4000;

interface ServiceAccount {
    client_email: string;
    private_key: string;
    token_uri?: string;
}

const b64url = (data: ArrayBuffer | string) => {
    const bytes = typeof data === 'string' ? new TextEncoder().encode(data) : new Uint8Array(data);
    let bin = '';
    for (const b of bytes) bin += String.fromCharCode(b);
    return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
};

async function accessToken(sa: ServiceAccount, signal: AbortSignal): Promise<string> {
    const pem = sa.private_key.replace(/-----[^-]+-----/g, '').replace(/\s+/g, '');
    const der = Uint8Array.from(atob(pem), (c) => c.charCodeAt(0));
    const key = await crypto.subtle.importKey(
        'pkcs8',
        der,
        { name: 'RSASSA-PKCS1-v1_5', hash: 'SHA-256' },
        false,
        ['sign']
    );
    const tokenUri = sa.token_uri || 'https://oauth2.googleapis.com/token';
    const now = Math.floor(Date.now() / 1000);
    const unsigned = `${b64url(JSON.stringify({ alg: 'RS256', typ: 'JWT' }))}.${b64url(
        JSON.stringify({ iss: sa.client_email, scope: SCOPE, aud: tokenUri, iat: now, exp: now + 3600 })
    )}`;
    const sig = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', key, new TextEncoder().encode(unsigned));

    const res = await fetch(tokenUri, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
            grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
            assertion: `${unsigned}.${b64url(sig)}`,
        }),
        signal,
    });
    if (!res.ok) throw new Error(`token request failed: ${res.status}`);
    return ((await res.json()) as { access_token: string }).access_token;
}

async function ensureTab(sheetId: string, token: string, signal: AbortSignal) {
    const auth = { Authorization: `Bearer ${token}` };
    const meta = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?fields=sheets.properties.title`,
        { headers: auth, signal }
    );
    if (!meta.ok) throw new Error(`spreadsheet lookup failed: ${meta.status}`);
    const { sheets = [] } = (await meta.json()) as { sheets?: { properties: { title: string } }[] };
    if (sheets.some((s) => s.properties.title === TAB)) return;

    const add = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}:batchUpdate`, {
        method: 'POST',
        headers: { ...auth, 'Content-Type': 'application/json' },
        body: JSON.stringify({ requests: [{ addSheet: { properties: { title: TAB } } }] }),
        signal,
    });
    if (!add.ok) throw new Error(`creating tab failed: ${add.status}`);
    await append(sheetId, token, [HEADER], signal);
}

async function append(sheetId: string, token: string, rows: string[][], signal: AbortSignal) {
    const range = encodeURIComponent(`${TAB}!A1`);
    const res = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
        {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ values: rows }),
            signal,
        }
    );
    if (!res.ok) throw new Error(`append failed: ${res.status}`);
}

export async function appendLeadToSheet(lead: Lead): Promise<void> {
    const creds = process.env.GOOGLE_SHEETS_CREDENTIALS;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!creds || !sheetId) return;

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);
    try {
        const sa = JSON.parse(creds) as ServiceAccount;
        const token = await accessToken(sa, controller.signal);
        await ensureTab(sheetId, token, controller.signal);
        await append(
            sheetId,
            token,
            [
                [
                    new Date().toISOString(),
                    lead.role,
                    lead.name ?? '',
                    lead.email,
                    lead.company ?? '',
                    lead.country ?? '',
                    lead.type ?? '',
                    lead.investment ?? '',
                    lead.telegram ?? '',
                    lead.message ?? '',
                    lead.locale ?? '',
                    'credit.markets',
                ],
            ],
            controller.signal
        );
    } catch (error) {
        // Log only the reason; never the lead's details or the credentials.
        console.error('Lead sheet append failed', {
            message: error instanceof Error ? error.message : String(error),
        });
    } finally {
        clearTimeout(timer);
    }
}
