

const VisionSection = () => {
  return (
    <section id="vision" className="py-32 bg-deep-black relative overflow-hidden flex items-center justify-center min-h-[60vh]">
      
      {/* Static Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.03),transparent_70%)]"></div>
      
      {/* Subtle Grid Lines (Static) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.03]">
         <div className="h-full w-full border-x border-clean-white max-w-7xl mx-auto"></div>
         <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-clean-white"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* The Monolith Container */}
        <div className="max-w-6xl mx-auto border-y border-white/10 py-16 md:py-24 relative">
           
           {/* Static Corner Accents */}
           <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-strategic-blue"></div>
           <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-strategic-blue"></div>
           <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-strategic-blue"></div>
           <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-strategic-blue"></div>

           <div className="text-center space-y-12">
              <h2 className="text-section font-bold text-depth-gray tracking-[0.4em] uppercase text-xs">
                OUR VISION
              </h2>

              <div className="space-y-6">
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold text-clean-white leading-tight tracking-tight">
                  We are the <span className="text-strategic-blue inline-block border-b-4 border-strategic-blue/20 pb-2">BRIDGE</span> <br className="hidden md:block"/>
                  between global investors <br className="hidden md:block"/>
                  and emerging economies' <span className="text-strategic-blue">CREDIT MARKETS</span>.
                </h3>
              </div>
              
              <div className="w-24 h-px bg-strategic-blue/30 mx-auto"></div>

              <p className="text-xl md:text-2xl text-depth-gray max-w-3xl mx-auto font-light leading-relaxed">
                Structuring and standardizing local credit into globally <span className="text-clean-white font-medium">investable assets</span>.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
};

export default VisionSection;
