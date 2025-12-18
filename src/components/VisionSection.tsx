

const VisionSection = () => {
  return (
    <section id="vision" className="py-24 bg-deep-black relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <h2 className="text-section font-bold text-depth-gray tracking-[0.2em] uppercase mb-16">
          Our Vision
        </h2>

        {/* Main Statement */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-clean-white leading-tight mb-8">
            We are the <span className="text-strategic-blue">BRIDGE</span> between global investors and
            emerging economies' <span className="text-strategic-blue">CREDIT MARKETS</span>
          </h3>
          
          {/* Supporting Sentence */}
          <p className="text-xl md:text-2xl text-depth-gray max-w-4xl mx-auto font-light">
            Structuring and standardizing local credit into globally <span className="text-strategic-blue">investable assets</span>
          </p>
        </div>

        {/* Decorative Grid */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 opacity-10">
          <div className="grid grid-cols-12 h-full gap-4">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-strategic-blue/20 first:border-l"></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
