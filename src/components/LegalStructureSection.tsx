import { motion } from "framer-motion";
import { ShieldCheck, Globe, FileText, Scale, Landmark } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const LegalStructureSection = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="structure"
      className="py-24 bg-deep-black relative overflow-hidden below-fold-section"
    >
      {/* Tech Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Central Blue Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-40"
           style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)' }}></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          {/* Left Column: Visual "The Shield" */}
          <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] items-center justify-center order-2 lg:order-1 hidden md:flex">
            {/* Rotating Shield Layers */}
            <div className="relative">
              {/* Layer 1 (Outer Hexagon) */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] border border-depth-gray/20 rounded-[4rem] ${
                  isMobile ? "" : "animate-[spin_40s_linear_infinite]"
                }`}
              ></div>

              {/* Layer 2 (Middle Circle) */}
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border-2 border-dashed border-strategic-blue/20 rounded-full ${
                  isMobile ? "" : "animate-[spin_30s_linear_infinite_reverse]"
                }`}
              ></div>

              {/* Layer 3 (Inner Shield) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-deep-black border border-strategic-blue/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.1)]">
                <ShieldCheck
                  className={`w-16 h-16 text-strategic-blue ${
                    isMobile ? "" : "animate-pulse"
                  }`}
                />
              </div>

              {/* Orbiting Lock */}
              <div
                className={`absolute top-1/2 left-1/2 w-[320px] h-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full ${
                  isMobile ? "" : "animate-[spin_15s_linear_infinite]"
                }`}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-6 h-6 bg-deep-black border border-strategic-blue rounded-sm flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-clean-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="flex-1 space-y-12 z-10 order-1 lg:order-2">
            <div>
              <h2 className="text-section font-bold text-depth-gray tracking-[0.2em] uppercase mb-4">
                STRUCTURE & COMPLIANCE
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-clean-white leading-tight mb-6">
                Built on regulated financial rails
              </h3>
              <p className="text-xl text-depth-gray leading-relaxed font-light">
                Credit Markets utilizes a structured offshore-onshore framework
                designed to meet international compliance standards while
                accessing local credit markets.
              </p>
            </div>

            <div className="space-y-8">
              {/* Offshore Block */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group p-6 bg-white/5 border border-white/5 rounded-sm hover:border-strategic-blue/30 transition-colors duration-300"
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-deep-black border border-strategic-blue/30 flex items-center justify-center text-strategic-blue">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-clean-white tracking-wider">
                    OFFSHORE
                  </h4>
                </div>
                <ul className="space-y-4 text-depth-gray font-mono text-sm ml-14">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-1.5 bg-strategic-blue rounded-full shrink-0"></div>
                    <span>
                      Investor onboarding through comprehensive KYC and AML
                      procedures
                    </span>
                  </li>
                </ul>
              </motion.div>

              {/* Onshore Block */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="group p-6 bg-white/5 border border-white/5 rounded-sm hover:border-strategic-blue/30 transition-colors duration-300"
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-deep-black border border-strategic-blue/30 flex items-center justify-center text-strategic-blue">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-clean-white tracking-wider">
                    ONSHORE
                  </h4>
                </div>
                <ul className="space-y-4 text-depth-gray font-mono text-sm ml-14">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 mt-1.5 bg-strategic-blue rounded-full shrink-0"></div>
                    <span>
                      Onshore allocation into regulated local credit funds and
                      originators, operating under regulators oversight
                    </span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalStructureSection;
