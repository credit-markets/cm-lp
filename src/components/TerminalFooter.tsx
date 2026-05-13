import { memo } from "react";
import { Link } from "react-router-dom";
import cmLogoWhite from "@/assets/cm-logo-white.png";

const TerminalFooter = memo(() => {
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
            <Link
              to="/terms"
              className="text-depth-gray hover:text-strategic-blue transition-colors font-mono text-sm tracking-wider"
            >
              TERMS
            </Link>
            <Link
              to="/privacy"
              className="text-depth-gray hover:text-strategic-blue transition-colors font-mono text-sm tracking-wider"
            >
              PRIVACY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
});

TerminalFooter.displayName = "TerminalFooter";

export default TerminalFooter;
