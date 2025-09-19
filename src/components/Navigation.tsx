import { Button } from "./ui/button";
import cmLogoWhite from "@/assets/cm-logo-white.png";
import cmLogoBlue from "@/assets/cm-logo-blue.png";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="h-8 w-8 transition-all duration-300 group">
            <img 
              src={cmLogoWhite} 
              alt="Credit Markets" 
              className="h-full w-full object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
            />
            <img 
              src={cmLogoBlue} 
              alt="Credit Markets" 
              className="h-full w-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-0 left-0"
            />
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-12">
            <a 
              href="#protocol" 
              className="text-clean-white hover:text-strategic-blue transition-colors duration-300 font-mono text-sm tracking-wider uppercase"
            >
              PROTOCOL
            </a>
            <a 
              href="#markets" 
              className="text-clean-white hover:text-strategic-blue transition-colors duration-300 font-mono text-sm tracking-wider uppercase"
            >
              MARKETS
            </a>
            <a 
              href="#access" 
              className="text-clean-white hover:text-strategic-blue transition-colors duration-300 font-mono text-sm tracking-wider uppercase"
            >
              ACCESS
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;