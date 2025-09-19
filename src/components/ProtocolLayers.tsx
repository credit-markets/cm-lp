const ProtocolLayers = () => {
  const layers = [
    {
      level: "LAYER 4",
      title: "APPLICATION",
      description: "Institutional Access Portal",
      color: "strategic-blue",
      priority: true
    },
    {
      level: "LAYER 3", 
      title: "SETTLEMENT",
      description: "Stablecoin Rails + FX Hedging",
      color: "clean-white",
      priority: false
    },
    {
      level: "LAYER 2",
      title: "TOKENIZATION", 
      description: "Brazilian Receivables → Digital Assets",
      color: "depth-gray",
      priority: false
    },
    {
      level: "LAYER 1",
      title: "ORIGINATION",
      description: "Credit Facilitators + Risk Management", 
      color: "dimensional-gray",
      priority: false
    }
  ];

  return (
    <section id="protocol" className="py-24 bg-clean-white isometric-grid relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-deep-black tracking-[0.2em] uppercase">
            ARCHITECTURE
          </h2>
        </div>

        {/* Protocol Stack */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {layers.map((layer, index) => (
              <div
                key={layer.level}
                className={`protocol-layer relative p-8 transition-all duration-500 hover:scale-105 ${
                  layer.priority 
                    ? 'bg-strategic-blue text-deep-black border-2 border-strategic-blue' 
                    : layer.color === 'clean-white'
                    ? 'bg-clean-white text-deep-black border-2 border-depth-gray/30'
                    : layer.color === 'depth-gray' 
                    ? 'bg-depth-gray text-clean-white border-2 border-depth-gray'
                    : 'bg-dimensional-gray text-clean-white border-2 border-dimensional-gray'
                }`}
                style={{
                  marginLeft: `${index * 2}rem`,
                  zIndex: layers.length - index,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Layer Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-sm tracking-wider opacity-70">
                    {layer.level}
                  </span>
                  <div className="w-8 h-8 border border-current opacity-30 transform rotate-45"></div>
                </div>

                {/* Layer Title */}
                <h3 className="text-2xl font-bold tracking-wider mb-4">
                  {layer.title}
                </h3>

                {/* Layer Description */}
                <p className="text-lg opacity-80 leading-relaxed">
                  {layer.description}
                </p>

                {/* Connection Lines */}
                {index < layers.length - 1 && (
                  <div className="absolute left-1/2 -bottom-4 w-px h-8 bg-current opacity-30"></div>
                )}

                {/* Isometric Shadow */}
                <div 
                  className="absolute inset-0 bg-deep-black/10 transform translate-x-2 translate-y-2 -z-10"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                ></div>
              </div>
            ))}
          </div>

          {/* Data Flow Indicators */}
          <div className="mt-16 flex justify-center">
            <div className="flex flex-col items-center space-y-4">
              <div className="text-deep-black font-mono text-sm tracking-wider">
                DATA ARCHITECTURE
              </div>
              <div className="flex space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 bg-strategic-blue rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.3}s` }}
                  ></div>
                ))}
              </div>
              <button className="px-6 py-2 border border-deep-black text-deep-black font-mono text-sm tracking-wider uppercase hover:bg-deep-black hover:text-clean-white transition-all duration-300">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProtocolLayers;