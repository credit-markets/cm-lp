import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-deep-black overflow-hidden">
      {/* Space for Spline 3D Animation - 70% of viewport */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-5xl max-h-screen flex items-center justify-center">
          {/* Placeholder for Spline animation */}
          <div className="w-full h-[70vh] bg-gradient-to-br from-dimensional-gray/20 to-strategic-blue/10 flex items-center justify-center rounded-lg border border-strategic-blue/20">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-strategic-blue/20 rounded border border-strategic-blue/40 flex items-center justify-center">
                <div className="w-12 h-12 bg-strategic-blue/30 rounded transform rotate-12"></div>
              </div>
              <p className="text-strategic-blue font-mono text-sm">
                [SPLINE 3D ANIMATION PLACEHOLDER]
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Headlines */}
        <div className="mb-16">
          <h1 className="text-hero font-bold text-clean-white mb-6 leading-tight tracking-wider">
            EMPOWERING EDGE MARKETS
          </h1>
          <h2 className="text-section text-depth-gray font-light tracking-[0.3em] uppercase">
            CREDIT ON-CHAIN
          </h2>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button variant="hero" size="hero" className="min-w-[200px]">
            APP
          </Button>
          <Button variant="outline" size="hero" className="min-w-[200px]">
            MORE
          </Button>
        </div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-strategic-blue/10 to-transparent transform rotate-45 -translate-x-16 translate-y-16"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-navy-accent/10 to-transparent transform -rotate-12 translate-x-24 -translate-y-24"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-24 bg-gradient-to-b from-strategic-blue to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;