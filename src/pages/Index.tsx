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
        // Use requestAnimationFrame for smoother integration with CSS smooth scroll
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        });
      }
    }
  }, [location.hash]);

  return (
    <main className="min-h-screen bg-deep-black">
      {/* Navigation */}
      <Navigation />
      
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Principles Section */}
      <PrinciplesSection />
      
      {/* Heavy core architecture components */}
      <Suspense fallback={<div className="min-h-[40vh] bg-deep-black" />}>
        <MarketArchitecture />
        <SolutionSection />
      </Suspense>

      {/* Secondary narrative components */}
      <Suspense fallback={<div className="min-h-[40vh] bg-deep-black" />}>
        <ValueFlowSection />
        <LegalStructureSection />
      </Suspense>
      
      {/* Team & Conversion components */}
      <Suspense fallback={<div className="min-h-[40vh] bg-deep-black" />}>
        <GeometricTeam />
        <AccessArchitecture />
        <TerminalFooter />
      </Suspense>
    </main>
  );
};

export default Index;
