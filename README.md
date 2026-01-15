# Credit Markets Landing Page

A high-performance, production-ready landing page for Credit Markets - a fintech platform connecting global investors with emerging market credit opportunities in Latin America.

## Overview

Credit Markets bridges institutional capital with tokenized asset-backed private credit in LATAM. This landing page showcases the platform's value proposition with a sophisticated "neo-geometric" design aesthetic, 3D visualizations, and interactive elements built for institutional investor engagement.

## Tech Stack

### Core Framework
- **React 18.3** - Modern UI library with concurrent features
- **TypeScript 5.8** - Type-safe development
- **Vite 5.4** - Ultra-fast build tool and dev server
- **React Router 6.30** - Client-side routing

### UI & Styling
- **shadcn/ui** - 48+ accessible, customizable components
- **Radix UI** - Unstyled, accessible component primitives
- **Tailwind CSS 3.4** - Utility-first styling
- **Framer Motion 12** - Advanced animations
- **Lucide React** - Icon library

### 3D & Visualization
- **Spline** - Interactive 3D scenes
- **Custom SVG animations** - Constellation visualizations

### Data & State Management
- **TanStack React Query 5** - Server state management
- **React Hook Form 7** - Form state management
- **Zod 3** - Schema validation

### Backend & Database
- **Vercel Edge Functions** - Serverless API
- **Neon Database** - Serverless Postgres
- **Vercel Analytics** - Web analytics

## Getting Started

### Prerequisites
- Node.js 18+ and npm (install with [nvm](https://github.com/nvm-sh/nvm))
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd cm-lp

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your DATABASE_URL

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Environment Variables

Create a `.env` file in the root directory:

```env
DATABASE_URL=your_neon_database_connection_string
POSTGRES_URL=your_postgres_connection_string
```

## Project Structure

```
cm-lp/
├── api/                      # Serverless API functions
│   └── submit.ts            # Waitlist form submission handler
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui components (48 components)
│   │   ├── Navigation.tsx   # Adaptive navigation with scroll-based logo coloring
│   │   ├── HeroSection.tsx  # 3D Spline hero with lazy loading
│   │   ├── PrinciplesSection.tsx  # Interactive constellation
│   │   ├── MarketArchitecture.tsx # Market opportunity visualization
│   │   ├── SolutionSection.tsx    # Solution pillars
│   │   ├── ValueFlowSection.tsx   # Value proposition
│   │   ├── LegalStructureSection.tsx  # Regulatory framework
│   │   ├── GeometricTeam.tsx      # Team showcase
│   │   ├── AccessArchitecture.tsx # Waitlist form
│   │   └── TerminalFooter.tsx     # Terminal-styled footer
│   ├── pages/               # Route pages
│   │   ├── Index.tsx       # Main landing page
│   │   ├── Terms.tsx       # Terms of Service
│   │   ├── Privacy.tsx     # Privacy Policy
│   │   └── NotFound.tsx    # 404 page
│   ├── hooks/              # Custom React hooks
│   │   ├── use-mobile.tsx  # Mobile breakpoint detection
│   │   └── use-toast.ts    # Toast notifications
│   ├── lib/                # Utilities
│   │   └── utils.ts        # Helper functions
│   ├── assets/             # Static assets
│   ├── App.tsx             # Root component
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles & design system
├── public/                 # Static public assets
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Available Scripts

```bash
# Development
npm run dev          # Start development server (localhost:8080)

# Production
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
```

## Performance Optimizations

This application implements industry-leading React performance best practices:

### Critical Optimizations
- **Lazy Loading**: Heavy components (3D graphics, below-fold sections) load on-demand
- **Code Splitting**: Individual Suspense boundaries for parallel loading
- **Analytics Deferred**: Vercel Analytics loads asynchronously to avoid blocking hydration
- **API Optimization**: Database table creation cached to avoid sequential queries

### High Priority Optimizations
- **Memoization**: PrincipleNode components with custom comparison functions
- **Hook Optimization**: `useIsMobile` uses matchMedia API instead of resize events
- **GPU Acceleration**: SVG animations use `willChange` hints
- **React Query**: Form submissions with automatic deduplication

### Additional Optimizations
- **Image Optimization**: width/height attributes, async decoding
- **Scroll Throttling**: Navigation scroll events throttled to 100ms with caching
- **Content Visibility**: CSS `content-visibility: auto` for below-fold sections
- **Smooth Animations**: AnimatePresence for exit animations
- **Bundle Optimization**: Configured for optimal icon tree-shaking

### Performance Metrics

Estimated performance gains:
- **First Contentful Paint (FCP)**: -150ms to -250ms
- **Largest Contentful Paint (LCP)**: -400ms to -600ms
- **Time to Interactive (TTI)**: -300ms to -500ms
- **Total Blocking Time (TBT)**: -75ms to -150ms

## Design System

The application uses a custom "Neo-Geometric" design system:

### Color Palette
- **Deep Black** (`#090909`) - Primary background
- **Dimensional Gray** (`#393939`) - Secondary background
- **Clean White** (`#f8f8f8`) - Primary text
- **Strategic Blue** (`#79c2ff`) - Accent color
- **Navy Accent** (`#01184e`) - Secondary accent

### Typography
- **IBM Plex Mono** - Monospace font for code/technical elements
- **Inter** - Sans-serif for body text

### Key Features
- Isometric transformations on card elements
- Terminal-inspired scanline effects
- Constellation-style visualizations
- 3D perspective layers

## API Routes

### POST `/api/submit`

Submit waitlist form data.

**Request Body:**
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
{
  "message": "Success"
}
```

## Deployment

### Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy
4. Add environment variables in Vercel dashboard

### Manual Build

```bash
# Build the application
npm run build

# Output will be in /dist directory
# Deploy the dist folder to your hosting provider
```

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a private project for Credit Markets. For questions or support, contact the development team.

## License

Proprietary - All rights reserved by Credit Markets

## Support

For technical support or questions:
- Email: lucas@credit.markets
- Website: https://credit.markets
