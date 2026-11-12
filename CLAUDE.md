# Credit Markets landing page

The public site at credit.markets: one scrolling page in English (`/`) and Portuguese (`/pt`), with a register form for investors and originators.

## Commands

```bash
npm run dev       # dev server
npm run build     # production build
npm run preview   # serve the build
npm run lint
```

## Stack

Vite 5 + React 18 + TypeScript, React Router, Tailwind 3.4 with shadcn/ui, Framer Motion, React Hook Form + Zod, TanStack Query. The API is one Vercel function, `api/submit.ts`. The hero animation is a hand-written Canvas 2D renderer (`src/components/IsoField.tsx`), with no 3D library.

## Page structure

`src/pages/Index.tsx` renders, in order: `Navigation`, `HeroSection`, `ThesisSection`, `ProtocolSection`, `InvestorsSection`, `OriginatorsSection`, `BlogInsightsSection`, `TeamSection`, `RegisterSection`, `TerminalFooter`.

To add a section: create the component, lazy-import it in `Index.tsx` inside its own `Suspense` boundary, and add its copy to both languages.

## Copy and languages

Every visible string lives in `src/i18n/content.ts` under `en` and `pt`, typed against each other, so a string missing from one language fails the build. Components read copy through `useLang()`. The EN/PT switch keeps the current section hash.

## Design system

Credit Markets v3; the source of truth is `../brand-guide/system/tokens`.

- Light by default (`cm-bg`, `cm-text`, `cm-accent`). Navy bands (`.cm-navy`) are for the hero and the register section only.
- Type: Archivo for headlines (`font-display`), Inter for body, JetBrains Mono for all figures (`cm-num`).
- Radius 6px, inputs 4px. Motion uses expo-out `cubic-bezier(0.16,1,0.3,1)`, without springs.
- Shared button and card classes are in `src/lib/cm.ts`. Tokens are CSS variables in `src/index.css` and `tailwind.config.ts`; add new ones there.
- No emojis in the UI.

## Performance

- Sections below the fold are lazy-loaded, each with its own `Suspense` boundary.
- `IsoField` pauses when off-screen or when the tab is hidden, and is static under reduced motion.
- `Navigation` throttles its scroll handler; `useIsMobile` uses `matchMedia`.
- Framer Motion animations are shortened or disabled on mobile and under reduced motion.

Keep these when editing the components involved.

## Register form and leads

- `RegisterSection` posts to `POST /api/submit`. The schema is `api/_lead-schema.ts`; change the form, the schema and the sheet columns together.
- `api/_sheets.ts` appends each lead to the "Website" tab of the signups Google Sheet, using a service account whose token is signed with WebCrypto. It creates the tab and header row on first write.
- The sheet is the only store. A failed write returns 500 so the visitor can retry.
- Production needs `GOOGLE_SHEETS_CREDENTIALS` and `GOOGLE_SHEET_ID` set in Vercel. Under `vite dev`, `/api/submit` is a stub that validates and stores nothing.
- If registrations return 500 in production, look for "Lead sheet append failed" or "Lead sheet not configured" in the Vercel logs, and check that the service account can edit the sheet.

## Deployment

Vercel deploys `main` to credit.markets and builds a preview for each pull request.

## Checks before a pull request

`npm run lint` and `npm run build`; the page at 375, 768, 1024 and 1440px wide; `/pt` fully in Portuguese; the form submitting against the dev stub.
