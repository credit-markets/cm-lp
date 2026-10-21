import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
// TerminalFooter is also statically imported by Privacy.tsx/Terms.tsx, so
// lazy-loading it here gives no payload benefit and shows an empty placeholder.
import TerminalFooter from "@/components/TerminalFooter";
import { LangProvider } from "@/i18n/lang";
import type { Lang } from "@/i18n/content";

// Lazy load below-the-fold components
const ThesisSection = lazy(() => import("@/components/ThesisSection"));
const ProtocolSection = lazy(() => import("@/components/ProtocolSection"));
const InvestorsSection = lazy(() => import("@/components/InvestorsSection"));
const OriginatorsSection = lazy(() => import("@/components/OriginatorsSection"));
const TeamSection = lazy(() => import("@/components/TeamSection"));
const BlogInsightsSection = lazy(() => import("@/components/BlogInsightsSection"));
const RegisterSection = lazy(() => import("@/components/RegisterSection"));

const Index = ({ lang = "en" }: { lang?: Lang }) => {
  const location = useLocation();

  useEffect(() => {
    function scrollToHash(hash: string, retries = 3): void {
      if (!hash) return;

      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        });
        return;
      }

      if (retries > 0) {
        console.log(`Element #${elementId} not found, retrying...`, { retriesLeft: retries });
        setTimeout(() => scrollToHash(hash, retries - 1), 300);
        return;
      }

      console.error(`Navigation target not found: #${elementId}`, {
        availableIds: Array.from(document.querySelectorAll('[id]')).map(el => el.id),
        requestedHash: hash,
      });
    }

    if (location.hash) {
      scrollToHash(location.hash);
    }
  }, [location.hash]);

  useEffect(() => {
    async function preloadComponents(): Promise<void> {
      const components = [
        { name: 'ThesisSection', load: () => import("@/components/ThesisSection") },
        { name: 'ProtocolSection', load: () => import("@/components/ProtocolSection") },
        { name: 'InvestorsSection', load: () => import("@/components/InvestorsSection") },
        { name: 'OriginatorsSection', load: () => import("@/components/OriginatorsSection") },
        { name: 'TeamSection', load: () => import("@/components/TeamSection") },
        { name: 'BlogInsightsSection', load: () => import("@/components/BlogInsightsSection") },
        { name: 'RegisterSection', load: () => import("@/components/RegisterSection") },
      ];

      for (const component of components) {
        try {
          await component.load();
        } catch (error) {
          console.error(`Failed to preload ${component.name}`, {
            error: error instanceof Error ? error.message : String(error),
            componentName: component.name,
          });
        }
      }
    }

    const timer = setTimeout(preloadComponents, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LangProvider lang={lang}>
    <main id="main-content" className="min-h-screen bg-cm-bg">
      {/* Navigation */}
      <Navigation />

      <HeroSection />

      {/* Individual Suspense boundaries for parallel loading */}
      <Suspense fallback={<div className="min-h-[40vh] bg-cm-bg" />}>
        <ThesisSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[40vh] bg-cm-bg" />}>
        <ProtocolSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[40vh] bg-cm-bg" />}>
        <InvestorsSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[40vh] bg-cm-bg" />}>
        <OriginatorsSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[40vh] bg-cm-bg" />}>
        <BlogInsightsSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[120px] bg-cm-bg" />}>
        <TeamSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[40vh] bg-cm-bg" />}>
        <RegisterSection />
      </Suspense>

      <TerminalFooter />
    </main>
    </LangProvider>
  );
};

export default Index;
