# CLAUDE.md - AI Assistant Context

This document provides context for AI assistants working on the Credit Markets Landing Page project.

## Project Overview

**Credit Markets** is a fintech platform that bridges institutional capital with tokenized asset-backed private credit in Latin America (LATAM). This landing page is designed to:
- Attract institutional investors ($100K+ allocations)
- Showcase the platform's regulatory compliance and technical sophistication
- Collect waitlist signups with investor information
- Communicate trust, transparency, and institutional-grade standards

## Architecture

### Technology Stack

**Frontend:**
- React 18.3 with TypeScript 5.8
- Vite 5.4 (build tool)
- React Router 6.30 (routing)
- shadcn/ui + Radix UI (component library)
- Tailwind CSS 3.4 (styling)
- Framer Motion 12 (animations)
- Hand-written canvas renderer for the hero block field (`IsoField.tsx`, no 3D library)

**State Management:**
- TanStack React Query 5 (server state)
- React Hook Form 7 (form state)
- Zod 3 (validation)

**Backend:**
- Vercel Edge Functions (serverless API)
- Google Sheets (leads land in the "Website" tab of the FIDC Dashboard Signups sheet)
- Vercel Analytics

### Performance Philosophy

This application is **heavily optimized** following Vercel React Best Practices. When making changes:

1. **Preserve lazy loading** - Components use `React.lazy()` and individual Suspense boundaries
2. **Maintain memoization** - Critical components use `memo()` with custom comparisons
3. **Keep hooks optimized** - `useIsMobile` uses matchMedia, callbacks are memoized
4. **Respect GPU hints** - SVG animations use `willChange` for GPU acceleration
5. **Cache expensive operations** - Navigation scroll uses throttling + Map-based caching

**Key Performance Files:**
- [src/App.tsx](src/App.tsx) - Analytics lazy-loaded
- [src/pages/Index.tsx](src/pages/Index.tsx) - Individual Suspense boundaries + preloading
- [src/components/IsoField.tsx](src/components/IsoField.tsx) - Canvas 2D block field; pauses off-screen and when the tab is hidden, static under reduced motion
- [src/components/Navigation.tsx](src/components/Navigation.tsx) - Throttled scroll with color cache
- [src/hooks/use-mobile.tsx](src/hooks/use-mobile.tsx) - matchMedia API for efficiency
- [api/_sheets.ts](api/_sheets.ts) - Reuses the Google access token and tab check across warm invocations

## Code Style & Conventions

### Component Patterns

**File naming:**
- PascalCase for components: `HeroSection.tsx`, `ProtocolSection.tsx`
- kebab-case for hooks: `use-mobile.tsx`
- kebab-case for utilities: `utils.ts`

**Component structure:**
```tsx
// Imports grouped: React, third-party, local
import { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

// Types/interfaces before component
interface ComponentProps {
  title: string;
  isActive: boolean;
}

// Main component with memo when needed
const Component = memo<ComponentProps>(({ title, isActive }) => {
  // Hooks first
  const isMobile = useIsMobile();

  // Memoized callbacks
  const handleClick = useCallback(() => {
    // implementation
  }, []);

  // JSX
  return (
    <section className="...">
      {/* content */}
    </section>
  );
});

export default Component;
```

### Styling Conventions

**Tailwind usage:**
- Use utility classes directly in JSX
- Complex responsive patterns: `className="text-xs md:text-sm lg:text-base"`
- Custom design tokens defined in `index.css` using CSS variables
- Conditional classes: Use `clsx` or template literals

**Design system (Credit Markets v3, source of truth in `../brand-guide/system/tokens`):**
- Light register by default (`cm-bg #FAFBFF`, `cm-text #01184E`, accent `cm-accent #1E3A8A`); navy bands (`.cm-navy`, `cm-navy #01184E`, sky accent) only for the hero and the register band
- Typography: Archivo (`font-display`, headlines), Inter (body), JetBrains Mono (`cm-num`, all figures)
- Radius 6px default, 4px inputs; motion is expo-out `cubic-bezier(0.16,1,0.3,1)`, no springs
- Shared button/card classes live in `src/lib/cm.ts`

**Class naming:**
```tsx
// Good
<section id="protocol" className="relative py-24 md:py-32 bg-cm-raised border-y border-cm-border">

// Avoid inline styles unless absolutely necessary (e.g., dynamic transforms)
<div style={{ transform: `translate(${x}px, ${y}px)` }}>
```

### TypeScript Conventions

**Prefer explicit types:**
```tsx
// Good
interface FormData {
  email: string;
  telegram: string | null;
  investment: string | null;
  type: string | null;
}

// Avoid 'any'
const props: any // ❌
```

**Function signatures:**
```tsx
// Callbacks
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
  // implementation
};

// Event handlers
const onChange = (e: MediaQueryListEvent | MediaQueryList): void => {
  // implementation
};
```

### State Management

**React Query for server state:**
```tsx
// Form submissions
const submitMutation = useMutation({
  mutationFn: async (data: WaitlistData) => {
    // API call
  },
  onSuccess: () => { /* ... */ },
  onError: (error) => { /* ... */ }
});

// Use mutation state
submitMutation.isPending
```

**React Hook Form for forms:**
```tsx
const form = useForm<FormData>({
  resolver: zodResolver(schema),
  defaultValues: { /* ... */ }
});
```

**Local state patterns:**
```tsx
// Initialize with function for expensive computations
const [state, setState] = useState(() => computeInitialState());

// Memoize callbacks passed to children
const handleChange = useCallback((value: string) => {
  setState(value);
}, []);
```

## Component Library

### Main Sections (in order)

1. **Navigation** - Fixed nav, transparent over the navy hero, menu below `lg`, EN/PT switch
2. **HeroSection** - Navy band with the `IsoField` canvas and three headline figures
3. **ThesisSection** - Scroll-lit thesis, area-true gap chart, access and risk barriers
4. **ProtocolSection** - Curators / Credit Markets rails / allocators as an isometric SVG stack
5. **InvestorsSection** - Three plain points for allocators
6. **OriginatorsSection** - What curators bring vs what the protocol provides
7. **BlogInsightsSection** - Paragraph posts; list below `lg`, cards above
8. **TeamSection** - One-line team strip
9. **RegisterSection** - Investor/originator form posting to `/api/submit`
10. **TerminalFooter** - Footer

**Copy and languages:** every visible string lives in `src/i18n/content.ts` (`en` and `pt`, typed against each other). `/` renders English, `/pt` Portuguese; components read copy through `useLang()`. Add a string to both languages or the build fails.

### shadcn/ui Components

48 components available in [src/components/ui/](src/components/ui/):
- Form elements: Button, Input, Label, Checkbox, Radio, Select, Switch, Textarea
- Layout: Card, Separator, Tabs, Accordion, Collapsible
- Overlays: Dialog, Sheet, Popover, Tooltip, Hover Card, Alert Dialog
- Feedback: Toast, Alert, Progress, Skeleton
- Navigation: Navigation Menu, Menubar, Context Menu, Dropdown Menu
- Data: Table, Carousel, Calendar, Chart
- Advanced: Command, Scroll Area, Resizable Panels, Sidebar

### Custom Hooks

**[use-mobile.tsx](src/hooks/use-mobile.tsx)**
```tsx
const isMobile = useIsMobile(); // Returns true when viewport < 768px
```
- Uses matchMedia API (more efficient than resize events)
- Properly initialized to avoid hydration mismatches
- Used throughout for responsive behavior

**[use-toast.ts](src/hooks/use-toast.ts)**
```tsx
const { toast } = useToast();
toast({ title: "Success", description: "Action completed" });
```

## API Endpoints

### POST /api/submit

Handles waitlist form submissions.

**Location:** [api/submit.ts](api/submit.ts)

**Request:**
```json
{
  "email": "investor@example.com",
  "telegram": "@username",
  "investment": "$100K-$500K",
  "type": "institutional"
}
```

**Response:**
```json
{ "message": "Success" }
```

**Implementation notes:**
- Uses Vercel Edge Runtime for speed
- CORS configured for production domains
- Appends each lead to the signups sheet via the Sheets API (service account, token signed with WebCrypto)
- The sheet is the only store: a failed write returns 500 so the visitor can retry

**Sheet columns (Website tab):** submitted at (UTC), role, name, email, company, country, investor type, allocation / monthly volume, Telegram, message, language, source. The tab and header row are created on the first write.

## Animation Patterns

### Framer Motion

**Scroll-triggered animations:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: index * 0.1 }}
>
```

**Exit animations with AnimatePresence:**
```tsx
<AnimatePresence mode="wait">
  {isVisible && (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* content */}
    </motion.div>
  )}
</AnimatePresence>
```

**Respect reduced motion:**
```tsx
const shouldReduceMotion = useReducedMotion();

// Disable animations on mobile or when user prefers reduced motion
transition={isMobile ? { duration: 0 } : { duration: 0.5 }}
```

### CSS Animations

Defined in [src/index.css](src/index.css):
- `orbit` - Circular motion
- `scanlines` - Terminal effect
- `cursor-blink` - Blinking cursor
- `float-star-basic` - Floating constellation nodes
- `twinkle-basic` - Twinkling stars
- `energy-flow` - Flowing gradients

## Common Tasks

### Adding a New Section

1. Create component in `src/components/NewSection.tsx`
2. Add lazy import in `src/pages/Index.tsx`:
   ```tsx
   const NewSection = lazy(() => import("@/components/NewSection"));
   ```
3. Add Suspense boundary:
   ```tsx
   <Suspense fallback={<div className="min-h-[40vh] bg-cm-bg" />}>
     <NewSection />
   </Suspense>
   ```
4. Add to preload list if below-fold
5. Put its copy in `src/i18n/content.ts` under both `en` and `pt`

### Modifying Forms

1. Update schema in component using Zod:
   ```tsx
   const schema = z.object({
     email: z.string().email(),
     // add fields
   });
   ```
2. Update TypeScript interface
3. Update React Hook Form default values
4. Update API handler in `api/submit.ts`
5. Update database schema if needed

### Performance Checklist

When adding new components:
- [ ] Use `memo()` if component has complex children or frequent parent re-renders
- [ ] Lazy load if component is heavy or below-fold
- [ ] Memoize callbacks passed to children with `useCallback()`
- [ ] Use individual Suspense boundaries for parallel loading
- [ ] Add `below-fold-section` class for content-visibility optimization
- [ ] Use `willChange` CSS hint for animated elements
- [ ] Optimize images with width/height attributes
- [ ] Use matchMedia API for responsive behavior, not resize events

## Environment Variables

Required for deployment:

```env
# Leads go to the "Website" tab of the FIDC Dashboard Signups sheet
# (same service account as score.credit.markets; see api/_sheets.ts)
GOOGLE_SHEETS_CREDENTIALS={"client_email": "...", "private_key": "..."}
GOOGLE_SHEET_ID=1QGomJ4bvO8LFFTwz7BcIJFjpg7lHxR_hdlvZKYtX4kg
```

Optional:
```env
# Vercel Analytics (auto-configured on Vercel)
VERCEL_ANALYTICS_ID=auto
```

## Deployment

**Vercel (Production):**
1. Connected to GitHub repo
2. Auto-deploys on push to `main` branch
3. Environment variables configured in Vercel dashboard
4. Custom domain: credit.markets

**Preview Deployments:**
- Created automatically for PRs
- URL pattern: `cm-lp-*.vercel.app`

## Testing Locally

```bash
# Start dev server
npm run dev

# Test production build
npm run build
npm run preview

# Lint
npm run lint
```

**Test checklist:**
- [ ] Forms submit successfully (`vite dev` answers `/api/submit` with a stub that validates but stores nothing; production needs the two Google Sheets variables)
- [ ] Mobile responsive (check at 375px, 768px, 1024px, 1440px)
- [ ] Animations run smoothly (60fps target)
- [ ] Hero block field animates and pauses when scrolled away
- [ ] `/pt` renders fully in Portuguese and the EN/PT switch keeps the section hash
- [ ] All links work (internal and external)
- [ ] Lazy loading works (check Network tab)

## Troubleshooting

### Common Issues

**Registrations fail with 500 in production**
- Check the Vercel logs for "Lead sheet append failed" or "Lead sheet not configured"
- The service account must have edit access to the sheet

**Hydration mismatch errors**
- Usually from client-only state (e.g., window.innerWidth)
- Use lazy initialization: `useState(() => checkIfMobile())`
- Check `use-mobile.tsx` for reference implementation

**Animations janky on mobile**
- Framer Motion animations should have `duration: 0` on mobile
- SVG animations should be disabled with `shouldReduceMotion`
- Check for expensive scroll handlers (should be throttled)

**Build errors with TypeScript**
- Run `npm run lint` to catch issues
- Common: missing types for props, incorrect event handler signatures
- Check `tsconfig.json` for current strictness settings

## Project Conventions

### Do's ✅
- Use TypeScript for all new code
- Follow the existing component structure
- Use shadcn/ui components when available
- Optimize for performance (lazy load, memoize, throttle)
- Use semantic HTML elements
- Add proper ARIA labels for accessibility
- Test on mobile devices
- Use the established design system (colors, typography, spacing)

### Don'ts ❌
- Don't add new dependencies without discussion
- Don't use inline styles unless absolutely necessary
- Don't bypass performance optimizations
- Don't use `any` type in TypeScript
- Don't create new design tokens without updating `index.css`
- Don't add emojis to the UI (unless explicitly in content)
- Don't skip responsive design considerations
- Don't ignore accessibility

## Additional Resources

- [Vercel React Best Practices](https://vercel.com/docs/frameworks/react)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [React Hook Form Documentation](https://react-hook-form.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## Contact

For questions about this project:
- **Technical Lead**: lucas@credit.markets
- **Website**: https://credit.markets
- **Repository**: [Internal/Private]

---

Last Updated: 2026-01-15
