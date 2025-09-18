import { Button } from "./ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold tracking-wider">
            <span className="text-navy-accent">CM</span>
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