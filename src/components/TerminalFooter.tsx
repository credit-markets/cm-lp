import cmLogoWhite from "@/assets/cm-logo-white.png";

const TerminalFooter = () => {
  return (
    <footer className="bg-deep-black border-t border-strategic-blue/30 py-8">
      <div className="container mx-auto px-6">
        {/* Top Line */}
        <div className="h-px bg-strategic-blue w-full mb-8"></div>
        
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left: Logo + Location */}
          <div className="flex items-center space-x-4">
            <img 
              src={cmLogoWhite} 
              alt="Credit Markets" 
              className="h-6 w-6 object-contain"
            />
            <span className="text-depth-gray font-mono text-sm">
              São Paulo / New York
            </span>
          </div>

          {/* Center: Contact */}
          <div className="text-clean-white font-mono text-sm">
            contact@credit.markets
          </div>

          {/* Right: Legal */}
          <div className="flex items-center space-x-6">
            <a 
              href="/terms" 
              className="text-depth-gray hover:text-strategic-blue transition-colors font-mono text-sm tracking-wider"
            >
              TERMS
            </a>
            <a 
              href="/privacy" 
              className="text-depth-gray hover:text-strategic-blue transition-colors font-mono text-sm tracking-wider"
            >
              PRIVACY
            </a>
          </div>
        </div>

        {/* Bottom Terminal Line */}
        <div className="mt-8 pt-4 border-t border-depth-gray/20">
          <div className="text-center text-depth-gray font-mono text-xs">
            <span className="text-strategic-blue">$</span> CREDIT_MARKETS_PROTOCOL_v2.1_ACTIVE
            <span className="text-strategic-blue animate-cursor-blink ml-2">_</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TerminalFooter;