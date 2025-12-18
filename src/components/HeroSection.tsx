import { Button } from "./ui/button";
import Spline from "@splinetool/react-spline";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-deep-black overflow-hidden">
      {/* Space for Spline 3D Animation - 70% of viewport */}
      <div className="absolute inset-0 flex items-center justify-center transform -translate-y-8 sm:-translate-y-10 lg:-translate-y-14">
        <div className="w-full h-full max-w-6xl max-h-screen flex items-center justify-center">
          <div className="w-full h-[80vh] bg-gradient-to-br from-dimensional-gray/20 to-strategic-blue/10 rounded-lg border border-strategic-blue/20 relative overflow-hidden">
            <div className="absolute inset-0">
              <div className="w-full h-full scale-[1.3] origin-center opacity-80">
                <Spline
                  className="w-full h-full"
                  scene="https://prod.spline.design/UHRQrA4wRGuld-d5/scene.splinecode"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 transform -translate-y-8 sm:-translate-y-10 lg:-translate-y-14">
        {/* Main Headlines */}
        <div className="mb-16">
          <h1 className="text-hero font-bold text-clean-white mb-6 leading-tight tracking-wider">
            EMPOWERING EDGE MARKETS
          </h1>
          <h2 className="text-section text-depth-gray font-light tracking-[0.3em] uppercase">
            WITH TOKENIZED CREDIT
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl font-medium max-w-2xl mx-auto mt-6 leading-relaxed">
            Institutional access to asset-backed private credit in emerging markets
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button variant="hero" size="hero" className="min-w-[200px]">
            Request Access
          </Button>
          <a href="https://t.me/lucastobritto" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="hero" className="min-w-[200px]">
              Speak with the Team
            </Button>
          </a>
        </div>
      </div>

      {/* Geometric Background Elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-strategic-blue/10 to-transparent transform rotate-45 -translate-x-16 translate-y-16"></div>
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-navy-accent/10 to-transparent transform -rotate-12 translate-x-24 -translate-y-24"></div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-11 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-24 bg-gradient-to-b from-strategic-blue to-transparent"></div>
      </div>
    </section>
  );
};

export default HeroSection;