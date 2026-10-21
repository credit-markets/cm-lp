import { z } from 'zod';

// Files prefixed with "_" under api/ are not deployed as functions; this one is
// shared by api/submit.ts and the local dev stub in vite.config.ts.

const emptyToUndefined = (val: unknown) =>
    typeof val === 'string' && val.trim() === '' ? undefined : val;

const optionalText = (max: number) =>
    z.preprocess(emptyToUndefined, z.string().trim().max(max).optional());

export const LeadSchema = z.object({
    email: z.string().trim().toLowerCase().email().max(254),
    // Older clients post without a role; they are investor waitlist signups.
    role: z.preprocess(emptyToUndefined, z.enum(['investor', 'originator']).default('investor')),
    name: optionalText(120),
    company: optionalText(160),
    country: optionalText(80),
    telegram: z.preprocess(
        emptyToUndefined,
        z
            .string()
            .trim()
            .max(64)
            .regex(/^@?[A-Za-z0-9_]{3,32}$/, 'Invalid Telegram handle')
            .optional()
    ),
    // Investor: allocation size. Originator: monthly origination volume.
    investment: optionalText(64),
    type: z.preprocess(
        emptyToUndefined,
        z.enum(['institutional', 'individual']).optional()
    ),
    message: optionalText(2000),
    // Language of the page the lead registered from, so the team replies in it.
    locale: z.preprocess(emptyToUndefined, z.enum(['en', 'pt']).optional()),
});

export type Lead = z.infer<typeof LeadSchema>;
