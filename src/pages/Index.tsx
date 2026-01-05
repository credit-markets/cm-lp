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
    // Handle hash navigation when component mounts or location changes
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        // Small delay to ensure the page has rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);
  return (
    <main className="min-h-screen bg-deep-black">
      {/* Navigation */}
      <Navigation />
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Principles Section (New) */}
      <PrinciplesSection />
      
      <Suspense fallback={<div className="min-h-[50vh]" />}>
        {/* 3. The Opportunity (Market) */}
        <MarketArchitecture />
        
        {/* 4. Our Approach (Solution) */}
        <SolutionSection />

        {/* 5. How Value Is Created */}
        <ValueFlowSection />

        {/* 7. Structure & Compliance */}
        <LegalStructureSection />
        
        {/* Team Section */}
        <GeometricTeam />
        
        {/* Access Flow */}
        <AccessArchitecture />
        
        {/* Footer */}
        <TerminalFooter />
      </Suspense>
    </main>
  );
};

export default Index;
