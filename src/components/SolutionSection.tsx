import { motion } from "framer-motion";
import { ShieldCheck, Clock, FileCheck, ArrowRightLeft } from "lucide-react";

const pillars = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Short-duration focus",
    description: "We prioritize transactions with maturities between 30 and 120 days, reducing macro, liquidity, and duration risk."
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Asset-backed credit",
    description: "Loans are collateralized by receivables under well-established Brazilian legal frameworks, enabling clearer recovery paths."
  },
  {
    icon: <FileCheck className="w-6 h-6" />,
    title: "Regulatory clarity",
    description: "We operate within regulated structures that provide transparency, enforceability, and investor protection."
  },
  {
    icon: <ArrowRightLeft className="w-6 h-6" />,
    title: "Embedded FX management",
    description: "Cross-border capital flows are supported by stablecoin rails and embedded FX hedging, minimizing operational friction."
  }
];

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 bg-dimensional-gray relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

       {/* Central Blue Glow */}
       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-strategic-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          
          {/* Left Column: Visual "The Bridge" */}
          <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] flex items-center justify-center order-2 lg:order-1">
             
             {/* Ring 1 (Capital) - Stabilized */}
             <div className="absolute top-1/2 left-[20%] -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] border-2 border-strategic-blue/20 rounded-full animate-[spin_60s_linear_infinite]"></div>

             {/* Ring 2 (Originators) - Stabilized */}
             <div className="absolute top-1/2 right-[20%] translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] border-2 border-item-blue/20 rounded-full animate-[spin_60s_linear_infinite_reverse]"></div>

             {/* The Bridge (Connecting Lines) */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="bridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="#3B82F6" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                {/* Connecting Beam */}
                <motion.line 
                  x1="20%" y1="50%" x2="80%" y2="50%" 
                  stroke="url(#bridgeGradient)" 
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                <motion.line 
                  x1="20%" y1="50%" x2="80%" y2="50%" 
                  stroke="#3B82F6" 
                  strokeWidth="8"
                  strokeOpacity="0.1"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.1 }}
                />

                {/* Vertical Stabilizers */}
                <motion.line x1="35%" y1="40%" x2="35%" y2="60%" stroke="#3B82F6" strokeWidth="1" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ delay: 0.5 }} />
                <motion.line x1="65%" y1="40%" x2="65%" y2="60%" stroke="#3B82F6" strokeWidth="1" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} transition={{ delay: 0.7 }} />
             </svg>

             {/* Central Hub (Security) */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-deep-black border border-strategic-blue rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)] z-20">
                <ShieldCheck className="text-strategic-blue w-8 h-8" />
             </div>

          </div>

          {/* Right Column: Narrative */}
          <div className="flex-1 space-y-10 z-10 order-1 lg:order-2">
            <div>
              <h2 className="text-section font-bold text-depth-gray tracking-[0.2em] uppercase mb-4">
                OUR APPROACH
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-clean-white leading-tight mb-6">
                Structured credit, built for global capital
              </h3>
              <p className="text-xl text-depth-gray leading-relaxed font-light">
                Credit Markets addresses these challenges through a disciplined, institution-first approach to private credit distribution.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {pillars.map((pillar, index) => (
                <motion.div 
                  key={pillar.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-start gap-4 p-4 rounded-sm hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5"
                >
                  <div className="w-10 h-10 rounded-sm bg-deep-black border border-item-blue/20 flex items-center justify-center text-strategic-blue group-hover:scale-110 transition-transform duration-300 shrink-0">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-clean-white group-hover:text-strategic-blue transition-colors duration-300 mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-depth-gray leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
