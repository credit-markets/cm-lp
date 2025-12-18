const SolutionSection = () => {
  const pillars = [
    {
      title: "Short-duration focus",
      description: "We prioritize transactions with maturities between 30 and 120 days, reducing macro, liquidity, and duration risk.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      )
    },
    {
       title: "Asset-backed credit",
       description: "Loans are collateralized by receivables under well-established Brazilian legal frameworks, enabling clearer recovery paths.",
       icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
       )
    },
    {
       title: "Regulatory clarity",
       description: "We operate within regulated structures that provide transparency, enforceability, and investor protection.",
       icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M20.7 7l-3.3 6H6.6l-3.3-6CO5.3 4.8 8.4 3 12 3s6.7 1.8 8.7 4z"/></svg>
       )
    },
    {
       title: "Embedded FX management",
       description: "Cross-border capital flows are supported by stablecoin rails and embedded FX hedging, minimizing operational friction.",
       icon: (
         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
       )
    }
  ];

  return (
    <section id="solution" className="py-24 bg-clean-white text-deep-black isometric-grid">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-deep-black tracking-[0.2em] uppercase mb-4">
            OUR APPROACH
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-deep-black leading-tight mb-6">
            Structured credit, built for global capital
          </h3>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-depth-gray leading-relaxed">
              Credit Markets addresses these challenges through a disciplined, institution-first approach to private credit distribution.
            </p>
          </div>
        </div>

        {/* 4-Column Grid: Light Theme Polish */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16 px-2">
          {pillars.map((pillar, index) => (
            <div 
              key={pillar.title}
              className="group relative p-8 bg-white border border-gray-100 rounded-sm shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Expanding Top Bar */}
              <div className="absolute top-0 left-0 w-12 h-1 bg-strategic-blue group-hover:w-full transition-all duration-500 ease-out"></div>
              
              {/* Icon Container with subtle background */}
              <div className="w-12 h-12 bg-gray-50 rounded-sm flex items-center justify-center mb-6 text-strategic-blue group-hover:bg-strategic-blue/10 transition-colors duration-300">
                {pillar.icon}
              </div>
              
              <h3 className="text-lg font-bold mb-3 text-deep-black group-hover:text-strategic-blue transition-colors duration-300">
                {pillar.title}
              </h3>
              
              <p className="text-sm text-depth-gray leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default SolutionSection;
