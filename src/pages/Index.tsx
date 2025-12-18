import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VisionSection from "@/components/VisionSection";
import MarketArchitecture from "@/components/MarketArchitecture";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ValueFlowSection from "@/components/ValueFlowSection";
import LegalStructureSection from "@/components/LegalStructureSection";
import GeometricTeam from "@/components/GeometricTeam";
import AccessArchitecture from "@/components/AccessArchitecture";
import TerminalFooter from "@/components/TerminalFooter";

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

      {/* 2. Our Vision */}
      <VisionSection />
      
      {/* 3. The Opportunity (Market) */}
      <MarketArchitecture />

      {/* 4. The Problem */}
      <ProblemSection />
      
      {/* 5. Our Approach (Solution) */}
      <SolutionSection />

      {/* 6. How Value Is Created */}
      <ValueFlowSection />

      {/* 8. Structure & Compliance */}
      <LegalStructureSection />
      
      {/* Team Section (Kept as extra) */}
      <GeometricTeam />
      
      {/* Access Flow (Kept as extra) */}
      <AccessArchitecture />
      
      {/* Footer */}
      <TerminalFooter />
    </main>
  );
};

export default Index;
