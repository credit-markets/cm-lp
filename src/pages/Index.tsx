import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PrinciplesSection from "@/components/PrinciplesSection";

// Lazy load below-the-fold components
const MarketArchitecture = lazy(() => import("@/components/MarketArchitecture"));
const SolutionSection = lazy(() => import("@/components/SolutionSection"));
const ValueFlowSection = lazy(() => import("@/components/ValueFlowSection"));
const LegalStructureSection = lazy(() => import("@/components/LegalStructureSection"));
const GeometricTeam = lazy(() => import("@/components/GeometricTeam"));
const AccessArchitecture = lazy(() => import("@/components/AccessArchitecture"));
const TerminalFooter = lazy(() => import("@/components/TerminalFooter"));

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToHash = async (hash: string, retries = 3): Promise<void> => {
      if (!hash) return;

      const elementId = hash.substring(1);
      const element = document.getElementById(elementId);

      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        });
      } else if (retries > 0) {
        console.log(`Element #${elementId} not found, retrying...`, { retriesLeft: retries });
        setTimeout(() => scrollToHash(hash, retries - 1), 300);
      } else {
        console.error(`Navigation target not found: #${elementId}`, {
          availableIds: Array.from(document.querySelectorAll('[id]')).map(el => el.id),
          requestedHash: hash,
        });
      }
    };

    if (location.hash) {
      scrollToHash(location.hash);
    }
  }, [location.hash]);

  useEffect(() => {
    const preloadComponents = async () => {
      const components = [
        { name: 'MarketArchitecture', import: () => import("@/components/MarketArchitecture") },
        { name: 'SolutionSection', import: () => import("@/components/SolutionSection") },
        { name: 'ValueFlowSection', import: () => import("@/components/ValueFlowSection") },
        { name: 'LegalStructureSection', import: () => import("@/components/LegalStructureSection") },
      ];

      for (const component of components) {
        try {
          await component.import();
        } catch (error) {
          console.error(`Failed to preload ${component.name}`, {
            error: error instanceof Error ? error.message : String(error),
            componentName: component.name,
          });
        }
      }
    };

    const timer = setTimeout(preloadComponents, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-deep-black">
      {/* Navigation */}
      <Navigation />
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Principles Section */}
      <PrinciplesSection />

      {/* Individual Suspense boundaries for parallel loading */}
      <Suspense fallback={<div className="min-h-[40vh] bg-deep-black" />}>
        <MarketArchitecture />
      </Suspense>

      <Suspense fallback={<div className="min-h-[40vh] bg-deep-black" />}>
        <SolutionSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[40vh] bg-deep-black" />}>
        <ValueFlowSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[40vh] bg-deep-black" />}>
        <LegalStructureSection />
      </Suspense>

      <Suspense fallback={<div className="min-h-[40vh] bg-deep-black" />}>
        <GeometricTeam />
      </Suspense>

      <Suspense fallback={<div className="min-h-[40vh] bg-deep-black" />}>
        <AccessArchitecture />
      </Suspense>

      <Suspense fallback={<div className="min-h-[40vh] bg-deep-black" />}>
        <TerminalFooter />
      </Suspense>
    </main>
  );
};

export default Index;
