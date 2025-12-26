import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-deep-black relative overflow-hidden">
      {/* Tech Grid Background (Subtle) */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Red Ambient Glow (Subtle Warning) */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-red-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          
          {/* Left Column: Narrative (Restored Copy) */}
          <div className="flex-1 space-y-12 z-10">
             <div>
              <h2 className="text-section font-bold text-depth-gray tracking-[0.2em] uppercase mb-4">
                THE PROBLEM
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-clean-white leading-tight mb-6">
                A paradox of liquidity.
              </h3>
              <p className="text-xl text-depth-gray leading-relaxed font-light mb-12">
                Useable capital is abundant, yet the infrastructure to deploy it safely is missing.
              </p>
              
              {/* Borrowers Block */}
              <div className="mb-8 group">
                <div className="flex items-center gap-4 mb-3">
                   <div className="w-10 h-10 rounded-full bg-deep-black border border-red-500/30 flex items-center justify-center text-red-500">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>
                   </div>
                   <h3 className="text-2xl md:text-3xl font-bold text-clean-white leading-tight group-hover:text-red-500 transition-colors duration-300">
                    Local Borrowers
                   </h3>
                </div>
                <p className="text-lg text-depth-gray leading-relaxed font-light pl-[3.5rem] mb-4">
                  Restrained by prohibitive costs and reliance on domestic banking monopolies.
                </p>
                <div className="pl-[3.5rem] flex gap-4">
                   <span className="text-xs font-mono text-red-400 py-1 px-2 bg-red-900/10 border border-red-900/20 rounded-sm">Limited Global Access</span>
                   <span className="text-xs font-mono text-red-400 py-1 px-2 bg-red-900/10 border border-red-900/20 rounded-sm">High Duration Risk</span>
                </div>
              </div>

              {/* Investors Block */}
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                   <div className="w-10 h-10 rounded-full bg-deep-black border border-red-500/30 flex items-center justify-center text-red-500">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                   </div>
                   <h3 className="text-2xl md:text-3xl font-bold text-clean-white leading-tight group-hover:text-red-500 transition-colors duration-300">
                    Global Investors
                   </h3>
                </div>
                <p className="text-lg text-depth-gray leading-relaxed font-light pl-[3.5rem] mb-4">
                  Blocked by operational opacity and jurisdictional uncertainty.
                </p>
                <div className="pl-[3.5rem] flex flex-wrap gap-2">
                   <span className="text-xs font-mono text-red-400 py-1 px-2 bg-red-900/10 border border-red-900/20 rounded-sm">Credit Quality Opacity</span>
                   <span className="text-xs font-mono text-red-400 py-1 px-2 bg-red-900/10 border border-red-900/20 rounded-sm">Collateral Enforceability</span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: The "Friction" Visual */}
          <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center">
             
             {/* The Rift (Barrier) */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[300px] bg-gradient-to-b from-transparent via-red-500/50 to-transparent blur-sm animate-pulse z-20"></div>

             {/* Orbital Ring 1 (Capital - Left) */}
             <div className="absolute top-1/2 left-[35%] -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-depth-gray/20 rounded-full animate-[spin_40s_linear_infinite]">
                {/* Node on Ring */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-3 h-3 bg-clean-white rounded-full shadow-[0_0_10px_white]"></div>
             </div>

             {/* Orbital Ring 2 (Originators - Right) */}
             <div className="absolute top-1/2 right-[35%] translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-depth-gray/20 rounded-full animate-[spin_50s_linear_infinite_reverse]">
                {/* Node on Ring */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 w-3 h-3 bg-clean-white rounded-full shadow-[0_0_10px_white]"></div>
             </div>

             {/* Friction Particles (Failing to connect) */}
             <motion.div 
               animate={{ opacity: [0, 1, 0], x: [0, 40, 60] }}
               transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               className="absolute top-1/2 left-[35%] w-2 h-[1px] bg-red-400"
             ></motion.div>
              <motion.div 
               animate={{ opacity: [0, 1, 0], x: [0, -40, -60] }}
               transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
               className="absolute top-[45%] right-[35%] w-2 h-[1px] bg-red-400"
             ></motion.div>

             {/* Label: Capital */}
             <div className="absolute top-[30%] left-[20%] text-right">
                <div className="text-xs font-mono text-depth-gray mb-1">GLOBAL CAPITAL</div>
                <div className="h-[1px] w-12 bg-depth-gray/30 ml-auto"></div>
             </div>

             {/* Label: Originators */}
             <div className="absolute bottom-[30%] right-[20%] text-left">
                <div className="text-xs font-mono text-depth-gray mb-1">LOCAL ORIGINATORS</div>
                <div className="h-[1px] w-12 bg-depth-gray/30 mr-auto"></div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

