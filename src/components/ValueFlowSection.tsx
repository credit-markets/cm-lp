import { motion } from "framer-motion";
import { TrendingUp, Globe, Building2 } from "lucide-react";

const valueProps = [
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "FOR INVESTORS",
    description: "Access to short-duration emerging market private credit with returns that are largely uncorrelated to traditional fixed income."
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "FOR ORIGINATORS",
    description: "Efficient access to international capital with competitive funding rates, expanded liquidity, and simplified cross-border operations."
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "FOR BORROWERS",
    description: "Lower cost of capital through improved market access, enabling sustainable growth without reliance on expensive domestic funding sources."
  }
];

const ValueFlowSection = () => {
  return (
    <section id="value" className="py-24 bg-deep-black relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

       {/* Central Blue/White Glow */}
       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-strategic-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          
          {/* Left Column: Narrative */}
          <div className="flex-1 space-y-12 z-10">
            <div>
              <h2 className="text-section font-bold text-depth-gray tracking-[0.2em] uppercase mb-4">
                HOW VALUE IS CREATED
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-clean-white leading-tight mb-6">
                The Growth Engine
              </h3>
              <p className="text-xl text-depth-gray leading-relaxed font-light">
                A virtuous cycle of capital deployment that unlocks value for every participant in the ecosystem.
              </p>
            </div>

            <div className="relative border-l border-depth-gray/20 pl-8 space-y-12">
               {/* Vertical Flow Line */}
               <div className="absolute top-0 bottom-0 left-[-1px] w-[1px] bg-gradient-to-b from-strategic-blue via-clean-white/50 to-transparent"></div>

              {valueProps.map((prop, index) => (
                <motion.div 
                  key={prop.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Node on Line */}
                  <div className="absolute top-1 left-[-41px] w-5 h-5 bg-deep-black border border-strategic-blue rounded-full flex items-center justify-center z-10">
                    <div className="w-1.5 h-1.5 bg-clean-white rounded-full"></div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-sm bg-dimensional-gray/50 border border-depth-gray/30 flex items-center justify-center text-clean-white group-hover:text-strategic-blue group-hover:border-strategic-blue/50 transition-colors duration-300 shrink-0">
                      {prop.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-clean-white mb-2 tracking-wide group-hover:text-strategic-blue transition-colors duration-300">
                        {prop.title}
                      </h4>
                      <p className="text-md text-depth-gray leading-relaxed font-light max-w-md">
                        {prop.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right Column: Visual "The Engine" */}
          <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center">
             
             {/* Core Engine */}
             <div className="relative">
                {/* Ring 1 (Inner) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] border border-strategic-blue/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                
                {/* Ring 2 (Middle) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-dotted border-depth-gray/30 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>

                {/* Ring 3 (Outer) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-depth-gray/10 rounded-full animate-[spin_30s_linear_infinite]">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-clean-white rounded-full"></div>
                </div>

                {/* Central Power Source */}
                <div className="w-24 h-24 bg-deep-black border-2 border-clean-white rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)] z-20 relative">
                   <div className="w-12 h-12 bg-clean-white rounded-full animate-pulse"></div>
                </div>
             </div>

             {/* Emitted Particles (Abstract Value) */}
             <motion.div 
               animate={{ opacity: [0, 1, 0], scale: [1, 1.5], top: ["50%", "20%"], left: ["50%", "80%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
               className="absolute w-2 h-2 bg-strategic-blue rounded-full top-1/2 left-1/2"
             ></motion.div>
             <motion.div 
               animate={{ opacity: [0, 1, 0], scale: [1, 1.5], top: ["50%", "80%"], left: ["50%", "20%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
               className="absolute w-2 h-2 bg-strategic-blue rounded-full top-1/2 left-1/2"
             ></motion.div>
             <motion.div 
               animate={{ opacity: [0, 1, 0], scale: [1, 1.5], top: ["50%", "20%"], left: ["50%", "20%"] }}
               transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
               className="absolute w-2 h-2 bg-strategic-blue rounded-full top-1/2 left-1/2"
             ></motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueFlowSection;
