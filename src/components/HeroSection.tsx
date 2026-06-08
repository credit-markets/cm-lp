import { Button } from "./ui/button";
import { lazy, Suspense, memo, useState, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";
import { CONTACT_MAILTO } from "@/lib/constants";

const Spline = lazy(() => import("@splinetool/react-spline"));

// Desktop loading fallback — minimal static gradient, no motion
const DesktopFallback = memo(function DesktopFallback() {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 60%)',
      }}
    />
  );
});

const HeroSection = memo(function HeroSection() {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const [sceneLoaded, setSceneLoaded] = useState(false);
  const [shouldLoadSpline, setShouldLoadSpline] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Only load Spline on desktop for performance
  useEffect(() => {
    if (isMobile || shouldReduceMotion) {
      // Mobile or reduced-motion: skip Spline
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
  }, [isMobile, shouldReduceMotion]);

  return (
    <section id="hero" ref={sectionRef} className="relative min-h-screen flex items-center justify-center bg-deep-black overflow-hidden">
      {/* Background Visualization — desktop only */}
      {!isMobile && (
        <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center transform -translate-y-8 sm:-translate-y-10 lg:-translate-y-14">
          <div className="w-full h-full max-w-6xl max-h-screen flex items-center justify-center">
            <div role="img" aria-label="Animated visualization of Credit Markets infrastructure" className="w-full h-[80vh] bg-gradient-to-br from-dimensional-gray/20 to-strategic-blue/5 rounded-lg border border-strategic-blue/10 relative overflow-hidden hero-spline-container">
              <div className="absolute inset-0">
                <div className="w-full h-full scale-[1.3] origin-center opacity-80">
                  {shouldLoadSpline ? (
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
                    <div className="w-full h-full bg-deep-black flex items-center justify-center relative overflow-hidden">
                      <DesktopFallback />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content Overlay */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6 transform -translate-y-8 sm:-translate-y-10 lg:-translate-y-14 pt-20">
        <div className="mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-clean-white mb-6 leading-tight tracking-wider">
            SHORT-DURATION EMERGING MARKET CREDIT
          </h1>
          <h2 className="text-sm sm:text-lg md:text-xl text-clean-white/70 font-light tracking-[0.15em] md:tracking-[0.2em] max-w-2xl mx-auto">
            Institutional access to collateralized private credit in LATAM
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
          <a href="https://staging.creditmarkets.lat/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button variant="hero" size="hero" className="w-full sm:w-auto min-w-[200px]">
              Launch App
            </Button>
          </a>
          <a href={CONTACT_MAILTO} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
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