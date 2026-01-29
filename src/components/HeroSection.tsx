import { Button } from "./ui/button";
import { memo, useRef } from "react";

// Extracted orbital fallback component to avoid duplication
const OrbitalFallback = memo(function OrbitalFallback() {
  return (
    <div className="absolute inset-0">
      {/* Animated gradient base */}
      <div className="absolute inset-0 animate-spline-gradient"
           style={{
             background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 30%, rgba(79, 70, 229, 0.05) 60%, transparent 100%)'
           }}></div>

      {/* Central core with glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-strategic-blue/20 animate-pulse backdrop-blur-sm relative">
          <div className="absolute inset-0 rounded-full bg-strategic-blue/10 animate-ping"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-strategic-blue/30 to-navy-accent/20 animate-spline-gradient"></div>
        </div>
      </div>

      {/* Orbital rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 rounded-full border border-strategic-blue/20 animate-[spin_20s_linear_infinite]" style={{ willChange: 'transform', transform: 'translateZ(0)' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full border border-strategic-blue/10 animate-[spin_30s_linear_infinite_reverse]" style={{ willChange: 'transform', transform: 'translateZ(0)' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[32rem] md:h-[32rem] rounded-full border border-navy-accent/5 animate-[spin_40s_linear_infinite]" style={{ willChange: 'transform', transform: 'translateZ(0)' }}></div>

      {/* Orbiting particles */}
      <div className="absolute top-1/2 left-1/2 w-48 h-48 md:w-64 md:h-64 animate-[spin_20s_linear_infinite]" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-strategic-blue rounded-full shadow-lg shadow-strategic-blue/50"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 md:w-96 md:h-96 animate-[spin_25s_linear_infinite_reverse]" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        <div className="absolute top-1/4 right-0 transform -translate-y-1/2 w-1.5 h-1.5 bg-navy-accent rounded-full shadow-md shadow-navy-accent/50 animate-pulse"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 md:w-[32rem] md:h-[32rem] animate-[spin_35s_linear_infinite]" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        <div className="absolute bottom-1/4 left-0 transform translate-y-1/2 w-1.5 h-1.5 bg-strategic-blue/70 rounded-full shadow-md shadow-strategic-blue/30"></div>
      </div>

      {/* Energy pulses */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-strategic-blue/30 animate-ping opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-52 md:h-52 rounded-full border border-navy-accent/20 animate-pulse"></div>

      {/* Floating data points */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-strategic-blue/60 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-navy-accent/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-strategic-blue/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-navy-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
});

const HeroSection = memo(function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center bg-deep-black overflow-hidden">
      {/* Background Visualization - CSS-only for performance */}
      <div className="absolute inset-0 flex items-center justify-center transform -translate-y-8 sm:-translate-y-10 lg:-translate-y-14">
        <div className="w-full h-full max-w-6xl max-h-screen flex items-center justify-center">
          <div className="w-full h-[80vh] bg-gradient-to-br from-dimensional-gray/20 to-strategic-blue/5 rounded-lg border border-strategic-blue/10 relative overflow-hidden hero-spline-container">
            <div className="absolute inset-0">
              <div className="w-full h-full scale-[1.3] origin-center opacity-80">
                <div className="w-full h-full bg-deep-black flex items-center justify-center relative overflow-hidden">
                  <OrbitalFallback />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6 transform -translate-y-8 sm:-translate-y-10 lg:-translate-y-14 pt-20">
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-clean-white mb-6 leading-tight tracking-wider">
            SHORT-DURATION EMERGING MARKET CREDIT
          </h1>
          <h2 className="text-sm sm:text-lg md:text-xl text-clean-white/70 font-light tracking-[0.15em] md:tracking-[0.2em] max-w-2xl mx-auto">
            Institutional access to tokenized asset-backed private credit in LATAM
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
          <a href="#access" className="w-full sm:w-auto">
            <Button variant="hero" size="hero" className="w-full sm:w-auto min-w-[200px]">
              Request Access
            </Button>
          </a>
          <a href="mailto:lucas@credit.markets" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="outline" size="hero" className="w-full sm:w-auto min-w-[200px]">
              Contact the Team
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-strategic-blue/10 to-transparent transform rotate-45 -translate-x-16 translate-y-16 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-navy-accent/10 to-transparent transform -rotate-12 translate-x-24 -translate-y-24 pointer-events-none"></div>
      
      <div className="absolute bottom-11 left-1/2 transform -translate-x-1/2 pointer-events-none opacity-50">
        <div className="w-px h-24 bg-gradient-to-b from-strategic-blue to-transparent"></div>
      </div>
    </section>
  );
});

export default HeroSection;