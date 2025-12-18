const ProblemSection = () => {
  return (
    <section className="py-24 bg-deep-black relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-section font-bold text-clean-white tracking-[0.2em] uppercase mb-6">
            THE PROBLEM
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-clean-white leading-tight max-w-4xl mx-auto">
            Capital is abundant, but market infrastructure is broken
          </h3>
        </div>

        {/* Split Content with Tech Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-10 h-10 bg-deep-black border border-depth-gray rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-depth-gray"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </div>
          </div>

          {/* Borrowers Side */}
          <div className="group bg-dimensional-gray/30 backdrop-blur-md p-10 rounded-sm border border-depth-gray/20 hover:border-strategic-blue/30 transition-all duration-500 relative overflow-hidden">
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-strategic-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            <div className="w-12 h-12 bg-deep-black rounded-sm border border-depth-gray/30 flex items-center justify-center mb-8 group-hover:border-strategic-blue/50 transition-colors relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-strategic-blue"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
            </div>
            <h4 className="text-2xl font-bold text-clean-white mb-4 tracking-wide relative z-10">
              Local Borrowers
            </h4>
            <p className="text-lg text-depth-gray leading-relaxed mb-6 relative z-10">
              Restrained by <span className="text-clean-white font-medium border-b border-strategic-blue/50">prohibitive costs</span> and short-term structures.
            </p>
            <ul className="space-y-3 text-depth-gray/80 relative z-10">
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-500/50 rounded-full mr-3"></span>Limited access to global liquidity</li>
              <li className="flex items-center"><span className="w-1.5 h-1.5 bg-red-500/50 rounded-full mr-3"></span>Reliance on domestic banking monopolies</li>
            </ul>
          </div>

          {/* Investors Side */}
          <div className="group bg-dimensional-gray/30 backdrop-blur-md p-10 rounded-sm border border-depth-gray/20 hover:border-strategic-blue/30 transition-all duration-500 relative overflow-hidden">
             {/* Hover Glow */}
            <div className="absolute inset-0 bg-strategic-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

             <div className="w-12 h-12 bg-deep-black rounded-sm border border-depth-gray/30 flex items-center justify-center mb-8 group-hover:border-strategic-blue/50 transition-colors relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-strategic-blue"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h4 className="text-2xl font-bold text-clean-white mb-4 tracking-wide relative z-10">
              Global Investors
            </h4>
            <p className="text-lg text-depth-gray leading-relaxed mb-6 relative z-10">
              Blocked by <span className="text-clean-white font-medium border-b border-strategic-blue/50">operational opacity</span> and risk uncertainty.
            </p>
            <ul className="space-y-3 relative z-10">
              {[
                "Credit quality & underwriting standards",
                "Collateral enforceability",
                "FX exposure & cross-border friction"
              ].map((item, i) => (
                <li key={i} className="flex items-start text-depth-gray/80">
                  <span className="w-1.5 h-1.5 bg-strategic-blue rounded-full mr-3 mt-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Closing Thesis */}
        <div className="mt-24 text-center max-w-3xl mx-auto">
           <h3 className="text-2xl md:text-3xl font-light text-clean-white mb-4">
             A paradox of liquidity.
           </h3>
           <p className="text-xl text-depth-gray">
             Useable capital is abundant, yet the <span className="text-clean-white">infrastructure to deploy it safely</span> is missing.
           </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
