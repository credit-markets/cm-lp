import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import MarketArchitecture from "@/components/MarketArchitecture";
import ProtocolLayers from "@/components/ProtocolLayers";
import LiveTerminal from "@/components/LiveTerminal";
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
      
      {/* Hero Section with Spline Animation Space */}
      <HeroSection />
      
      {/* Market Infrastructure */}
      <MarketArchitecture />
      
      {/* Protocol Architecture */}
      <ProtocolLayers />
      
      {/* Live Terminal */}
      <LiveTerminal />
      
      {/* Team Section */}
      <GeometricTeam />
      
      {/* Access Flow */}
      <AccessArchitecture />
      
      {/* Footer */}
      <TerminalFooter />
    </main>
  );
};

export default Index;
