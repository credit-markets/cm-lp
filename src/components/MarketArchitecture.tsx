const MarketArchitecture = () => {
  const marketData = [
    { country: "BRAZIL", amount: "$851B", label: "UNMET DEMAND", priority: true },
    { country: "MEXICO", amount: "$318B", label: "UNMET DEMAND", priority: false },
    { country: "ARGENTINA", amount: "$129B", label: "UNMET DEMAND", priority: false },
    { country: "COLOMBIA", amount: "$67B", label: "UNMET DEMAND", priority: false },
    { country: "LATAM TOTAL", amount: "$1.8T", label: "CREDIT GAP", priority: true },
    { country: "GLOBAL DEMAND", amount: "$950B+", label: "INSTITUTIONAL", priority: false },
  ];

  return (
    <section id="markets" className="py-24 bg-dimensional-gray">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-clean-white tracking-[0.2em] uppercase">
            MARKET INFRASTRUCTURE
          </h2>
        </div>

        {/* Isometric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {marketData.map((market, index) => (
            <div
              key={market.country}
              className="isometric-card bg-deep-black border-2 border-depth-gray/30 hover:border-strategic-blue p-8 text-center relative overflow-hidden transition-colors duration-300 group"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Hover indicator */}
              <div className="absolute top-0 left-0 w-full h-1 bg-strategic-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Country */}
              <h3 className="text-clean-white font-bold text-lg tracking-wider mb-4">
                {market.country}
              </h3>
              
              {/* Amount */}
              <div className="text-data font-mono text-strategic-blue mb-4 font-bold">
                {market.amount}
              </div>
              
              {/* Label */}
              <p className="text-depth-gray text-sm tracking-wider uppercase font-mono">
                {market.label}
              </p>

              {/* Isometric corner accent */}
              <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-strategic-blue/20 to-transparent transform rotate-45 translate-x-4 translate-y-4"></div>
            </div>
          ))}
        </div>

        {/* Data Flow Visualization */}
        <div className="mt-16 flex justify-center">
          <div className="flex items-center space-x-4 text-depth-gray font-mono text-sm">
            <span>DATA FLOW</span>
            <div className="w-24 h-px bg-gradient-to-r from-strategic-blue to-transparent relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-strategic-blue animate-data-flow"></div>
            </div>
            <span className="text-strategic-blue">REAL-TIME</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketArchitecture;