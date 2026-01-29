import { Button } from "./ui/button";
import { lazy, Suspense, memo, useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Spline = lazy(() => import("@splinetool/react-spline"));

// Enhanced mobile animation - more impressive than desktop loading state
const MobileAnimation = memo(function MobileAnimation() {
  return (
    <div className="absolute inset-0">
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0 animate-spline-gradient"
           style={{
             background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0.15) 20%, rgba(79, 70, 229, 0.08) 40%, transparent 70%)'
           }}></div>
      <div className="absolute inset-0 animate-[pulse_4s_ease-in-out_infinite]"
           style={{
             background: 'radial-gradient(circle at 30% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)'
           }}></div>

      {/* Central energy core with multiple layers */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {/* Outer glow */}
        <div className="absolute inset-0 w-32 h-32 -translate-x-16 -translate-y-16 rounded-full bg-strategic-blue/10 blur-2xl animate-pulse"></div>

        {/* Main core */}
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-strategic-blue/30 to-navy-accent/20 backdrop-blur-sm relative animate-pulse">
          <div className="absolute inset-0 rounded-full bg-strategic-blue/20 animate-ping"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-strategic-blue/40 to-transparent"></div>
          <div className="absolute inset-4 rounded-full bg-clean-white/10 animate-[spin_3s_linear_infinite]"></div>
        </div>
      </div>

      {/* Multi-speed orbital rings with particles */}
      {/* Ring 1 - Fast inner */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-strategic-blue/30 animate-[spin_15s_linear_infinite]" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-strategic-blue rounded-full shadow-lg shadow-strategic-blue/50"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 bg-strategic-blue/70 rounded-full"></div>
      </div>

      {/* Ring 2 - Medium */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-dashed border-strategic-blue/20 animate-[spin_20s_linear_infinite_reverse]" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-navy-accent rounded-full shadow-md shadow-navy-accent/50 animate-pulse"></div>
        <div className="absolute left-0 top-1/3 -translate-x-1/2 w-1.5 h-1.5 bg-strategic-blue/60 rounded-full"></div>
      </div>

      {/* Ring 3 - Outer slow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-navy-accent/10 animate-[spin_30s_linear_infinite]" style={{ willChange: 'transform', transform: 'translateZ(0)' }}>
        <div className="absolute top-1/4 left-3/4 w-1.5 h-1.5 bg-strategic-blue/50 rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-navy-accent/40 rounded-full animate-pulse"></div>
      </div>

      {/* Ring 4 - Very slow outer */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-strategic-blue/5 animate-[spin_45s_linear_infinite_reverse]" style={{ willChange: 'transform', transform: 'translateZ(0)' }}></div>

      {/* Floating energy particles with varied animations */}
      <motion.div
        className="absolute w-3 h-3 bg-strategic-blue/40 rounded-full blur-sm"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          opacity: [0.4, 0.8, 0.4, 0.4],
          scale: [1, 1.5, 1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: '30%', left: '20%' }}
      />
      <motion.div
        className="absolute w-2 h-2 bg-navy-accent/50 rounded-full blur-sm"
        animate={{
          x: [0, -80, 70, 0],
          y: [0, 90, -40, 0],
          opacity: [0.5, 0.9, 0.5, 0.5],
          scale: [1, 1.3, 1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ top: '60%', right: '25%' }}
      />
      <motion.div
        className="absolute w-2.5 h-2.5 bg-strategic-blue/30 rounded-full blur-sm"
        animate={{
          x: [0, 60, -90, 0],
          y: [0, -60, 40, 0],
          opacity: [0.3, 0.7, 0.3, 0.3],
          scale: [1, 1.4, 1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{ bottom: '25%', left: '35%' }}
      />

      {/* Pulsing energy waves */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border-2 border-strategic-blue/20 animate-ping opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-navy-accent/15 animate-pulse"></div>

      {/* Additional ambient particles */}
      <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-strategic-blue/60 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-navy-accent/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-strategic-blue/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-navy-accent/40 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 right-1/5 w-1 h-1 bg-strategic-blue/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/2 left-1/5 w-1 h-1 bg-navy-accent/50 rounded-full animate-pulse" style={{ animationDelay: '2.5s' }}></div>

      {/* Data stream lines */}
      <div className="absolute top-1/4 left-1/2 w-px h-12 bg-gradient-to-b from-strategic-blue/30 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-px h-16 bg-gradient-to-t from-navy-accent/20 to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
    </div>
  );
});

// Desktop loading fallback
const DesktopFallback = memo(function DesktopFallback() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 animate-spline-gradient"
           style={{
             background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 30%, rgba(79, 70, 229, 0.05) 60%, transparent 100%)'
           }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-20 h-20 rounded-full bg-strategic-blue/20 animate-pulse backdrop-blur-sm relative">
          <div className="absolute inset-0 rounded-full bg-strategic-blue/10 animate-ping"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-strategic-blue/30 to-navy-accent/20 animate-spline-gradient"></div>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-strategic-blue/20 animate-[spin_20s_linear_infinite]" style={{ willChange: 'transform', transform: 'translateZ(0)' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-strategic-blue/10 animate-[spin_30s_linear_infinite_reverse]" style={{ willChange: 'transform', transform: 'translateZ(0)' }}></div>
    </div>
  );
});

const HeroSection = memo(function HeroSection() {
  const isMobile = useIsMobile();
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Only load Spline on desktop for performance
  useEffect(() => {
    if (isMobile) {
      // Mobile: never load Spline
      setShouldLoadSpline(false);
      return;
    }

    // Desktop: load Spline when section is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadSpline(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center bg-deep-black overflow-hidden">
      {/* Background Visualization */}
      <div className="absolute inset-0 flex items-center justify-center transform -translate-y-8 sm:-translate-y-10 lg:-translate-y-14">
        <div className="w-full h-full max-w-6xl max-h-screen flex items-center justify-center">
          <div className="w-full h-[80vh] bg-gradient-to-br from-dimensional-gray/20 to-strategic-blue/5 rounded-lg border border-strategic-blue/10 relative overflow-hidden hero-spline-container">
            <div className="absolute inset-0">
              <div className="w-full h-full scale-[1.3] origin-center opacity-80">
                {isMobile ? (
                  // Mobile: Enhanced CSS animation only
                  <div className="w-full h-full bg-deep-black flex items-center justify-center relative overflow-hidden">
                    <MobileAnimation />
                  </div>
                ) : shouldLoadSpline ? (
                  // Desktop: Load Spline 3D
                  <Suspense fallback={
                    <div className="w-full h-full bg-deep-black flex items-center justify-center relative overflow-hidden">
                      <DesktopFallback />
                    </div>
                  }>
                    <motion.div
                      className="w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: sceneLoaded ? 1 : 0 }}
                      transition={{ duration: 2, ease: "easeOut" }}
                    >
                      <Spline
                        className="w-full h-full"
                        scene="https://prod.spline.design/UHRQrA4wRGuld-d5/scene.splinecode"
                        onLoad={() => setSceneLoaded(true)}
                      />
                    </motion.div>
                  </Suspense>
                ) : (
                  // Desktop: Before Spline loads
                  <div className="w-full h-full bg-deep-black flex items-center justify-center relative overflow-hidden">
                    <DesktopFallback />
                  </div>
                )}
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