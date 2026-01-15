import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, memo, useCallback } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const principles = [
  { title: "Capital Preservation", desc: "Our primary mandate is the protection of principal through rigorous risk management.", code: "CAP_PRES" },
  { title: "Compliance First", desc: "Regulatory adherence is rigorously enforced in every transaction structure.", code: "COMPL_01" },
  { title: "Aligned Incentives", desc: "We structure deals to ensure skin in the game and mutual success.", code: "ALIGN_IN" },
  { title: "Data First", desc: "Decisions are driven by real-time, observable underlying asset performance.", code: "DATA_DRV" },
  { title: "Radical Transparency", desc: "Full, unhindered visibility into collateral, flows, and documentation.", code: "RAD_TRNS" },
  { title: "Institutional Standards", desc: "Built to satisfy the rigorous operational requirements of global allocators.", code: "INST_STD" },
  { title: "Trust Minimized", desc: "We rely on verification and cryptographic enforcement, not promises.", code: "TRUST_MN" }
];

const desktopPositions = [
  { x: 0, y: -35 },
  { x: -32, y: -18 },
  { x: -36, y: 15 },
  { x: -12, y: 38 },
  { x: 18, y: 36 },
  { x: 38, y: 8 },
  { x: 28, y: -22 },
];

const mobilePositions = [
  { x: 0, y: -40 },     // Top
  { x: -34, y: -24 },   // Top Left
  { x: -38, y: 8 },     // Mid Left
  { x: -24, y: 38 },    // Bot Left
  { x: 24, y: 38 },     // Bot Right
  { x: 38, y: 8 },      // Mid Right
  { x: 34, y: -24 },    // Top Right
];

const constellationLines = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], 
  [0, 3], [1, 4], [2, 5]
];

const PrinciplesSection = memo(() => {
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const nodePositions = isMobile ? mobilePositions : desktopPositions;

  const handleSetActive = useCallback((index: number | null) => {
    setActivePrinciple(prev => prev === index ? null : index);
  }, []);

  return (
    <section id="principles" className="py-16 md:py-24 bg-deep-black relative overflow-hidden min-h-[650px] md:min-h-[850px]">
      {/* Lighting: Ambient pulse */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06)_0%,transparent_70%)] animate-pulse"></div>
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-white/50 tracking-[0.3em] uppercase mb-3 md:mb-4">
            OUR PRINCIPLES
          </h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight max-w-3xl mx-auto px-4">
            Non-negotiable standards that secure capital and align incentives.
          </h3>
        </div>

        <div className="relative w-full max-w-[400px] md:max-w-[850px] h-[480px] md:h-[580px] mx-auto flex items-center justify-center constellation-container transition-all duration-500">
          <motion.div
            className="absolute top-[calc(50%+65px)] md:top-[calc(50%+85px)] left-1/2 -translate-x-1/2 z-20 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: activePrinciple === null ? 0.4 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[10px] md:text-xs font-mono text-white/60 uppercase tracking-[0.4em]">Select One</span>
          </motion.div>

          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              <radialGradient id="central-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.25)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
              </radialGradient>

              <linearGradient id="energyPulse" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0)">
                  {!shouldReduceMotion && <animate attributeName="offset" values="-0.5;1.5" dur="2s" repeatCount="indefinite" />}
                </stop>
                <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)">
                  {!shouldReduceMotion && <animate attributeName="offset" values="0;2" dur="2s" repeatCount="indefinite" />}
                </stop>
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0)">
                  {!shouldReduceMotion && <animate attributeName="offset" values="0.5;2.5" dur="2s" repeatCount="indefinite" />}
                </stop>
              </linearGradient>
            </defs>

            <circle cx="50%" cy="50%" r="20%" fill="url(#central-glow)" />

            {[8, 11, 14, 17].map((radius, idx) => (
              <circle
                key={`hub-ring-${idx}`}
                cx="50%"
                cy="50%"
                r={`${radius}%`}
                fill="none"
                stroke="rgba(59, 130, 246, 0.08)"
                strokeWidth="1"
              />
            ))}

            {constellationLines.map(([from, to], idx) => {
              const fromPos = nodePositions[from];
              const toPos = nodePositions[to];
              const isRelevant = activePrinciple === from || activePrinciple === to;
              
              return (
                <g key={`web-link-${idx}`}>
                  <line
                    x1={`${50 + fromPos.x}%`}
                    y1={`${50 + fromPos.y}%`}
                    x2={`${50 + toPos.x}%`}
                    y2={`${50 + toPos.y}%`}
                    stroke={isRelevant ? "rgba(59, 130, 246, 0.4)" : "rgba(59, 130, 246, 0.08)"}
                    strokeWidth={isRelevant ? 1.2 : 0.6}
                    className="transition-all duration-500"
                  />
                </g>
              );
            })}

            {nodePositions.map((pos, i) => (
              <line
                key={`spoke-${i}`}
                x1="50%"
                y1="50%"
                x2={`${50 + pos.x}%`}
                y2={`${50 + pos.y}%`}
                stroke={activePrinciple === i ? "rgba(59, 130, 246, 0.6)" : "rgba(59, 130, 246, 0.1)"}
                strokeWidth={activePrinciple === i ? 2 : 1}
                className="transition-all duration-300"
              />
            ))}

            {activePrinciple !== null && nodePositions.map((pos, i) =>
              activePrinciple === i && (
                <g key={`energy-pulse-${i}`}>
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`${50 + pos.x}%`}
                    y2={`${50 + pos.y}%`}
                    stroke="url(#energyPulse)"
                    strokeWidth={3}
                    strokeLinecap="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ willChange: 'opacity' }}
                  />
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={`${50 + pos.x}%`}
                    y2={`${50 + pos.y}%`}
                    stroke="rgba(59, 130, 246, 0.15)"
                    strokeWidth={8}
                    strokeLinecap="round"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ willChange: 'opacity' }}
                  />
                </g>
              )
            )}
          </svg>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className={`relative ${isMobile ? 'w-24 h-24' : 'w-32 h-32'} bg-deep-black border border-white/15 rounded-full flex items-center justify-center`}>
               <div className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} text-strategic-blue`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.31 319.89" className="w-full h-full fill-current">
                   <path d="M186.07,211.97c1.37,1.11,2.73,1.98,3.79,3.12,10.3,11.07,20.55,22.19,30.81,33.29,1.44,1.56,2.73,3.31,4.38,4.62,2.42,1.91,2.21,3.79.8,6.16-15.19,25.48-36.23,44.24-64.23,54.32-19.14,6.9-39.12,7.61-59.22,5.05-40.12-5.11-69.14-26.49-88.29-61.48C4.98,240.36.48,221.88.25,203.01c-.37-30.72-.62-61.56,1.53-92.18C4.32,74.74,20.74,44.78,49.51,22.46,67.25,8.69,88.05,1.99,110.35.59c16.63-1.04,33.23-.4,49.47,4.07,9.99,2.75,19.17,7.13,27.58,13.15,14.4,10.3,25.57,23.78,36.77,37.24,2.06,2.47.29,4.48-1.02,6.39-7.45,10.95-14.95,21.87-22.45,32.79-2.76,4.02-5.49,8.06-8.36,11.99-3.89,5.34-4.94,5.19-9.23.32-9.16-10.39-17.86-21.31-27.93-30.74-16.23-15.2-35.8-20.34-56.4-10.73-20.15,9.4-33.26,25.53-35.1,48.66-.89,11.19-.64,22.48-.7,33.73-.1,17.5-.18,35.01.03,52.51.07,5.71.66,11.5,1.74,17.11,2.65,13.81,10.97,24.09,22.22,31.75,24.67,16.79,57.21,17.11,80.15-10.87,6.16-7.52,11.5-15.72,17.21-23.61.5-.69,1.01-1.38,1.73-2.37Z"/>
                   <path d="M359.03.45c.06,1.32.14,2.64.14,3.74.07,18.25.22,36.5.08,54.75-.02,2.68-.86,5.77-2.35,7.97-33.74,49.58-67.63,99.07-101.5,148.57-2.94,4.29-3.24,4.33-6.88.68-11.39-11.41-22.7-22.91-34.16-34.24-2.98-2.95-3.3-6.08-1.58-9.51,1.45-2.89,3.18-5.67,5.01-8.34,35.55-51.98,71.28-103.84,106.52-156.03,4.2-6.22,8.18-7.78,15.56-7.99,6.09-.18,11.73.3,17.6.4.37,0,.73.02,1.55.01Z"/>
                   <path d="M358.81,134.7v183.68h-61.01c-.17-3.08-.46-6.04-.47-8.99-.07-26.88-.17-53.77-.02-80.65.01-2.68,1.03-5.73,2.55-7.95,18.63-27.38,37.44-54.64,56.2-81.93.74-1.08,1.45-2.18,2.76-4.15Z"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Principle Nodes */}
          {principles.map((principle, i) => (
            <PrincipleNode
              key={i}
              index={i}
              principle={principle}
              position={nodePositions[i]}
              isActive={activePrinciple === i}
              setActive={handleSetActive}
              isMobile={isMobile}
            />
          ))}
        </div>

          <div className="absolute top-1/2 left-1/2 w-[280px] md:w-[320px] pointer-events-none z-30" style={{ transform: 'translate(-50%, -50%)' }}>
            <AnimatePresence mode="wait">
              {activePrinciple !== null && (
                <motion.div
                  key={activePrinciple}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-deep-black/95 backdrop-blur-md border border-strategic-blue/30 p-5 md:p-6 rounded-sm shadow-[0_0_30px_rgba(59,130,246,0.15)] pointer-events-auto">
                    <span className="text-[10px] font-mono text-strategic-blue/80 block mb-2 md:mb-3 uppercase tracking-widest">{principles[activePrinciple].code}</span>
                    <h4 className="text-clean-white font-bold uppercase text-xs md:text-sm mb-1 md:mb-2 tracking-wide">
                      {principles[activePrinciple].title}
                    </h4>
                    <p className="text-clean-white/95 text-[12px] md:text-sm font-light leading-relaxed">
                      {principles[activePrinciple].desc}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
      </div>
    </section>
  );
});

PrinciplesSection.displayName = 'PrinciplesSection';

interface PrincipleNodeProps {
  index: number;
  principle: { title: string; code: string; desc: string };
  position: { x: number; y: number };
  isActive: boolean;
  setActive: (index: number | null) => void;
  isMobile: boolean;
}

const PrincipleNode = memo<PrincipleNodeProps>(({ index, principle, position, isActive, setActive, isMobile }) => {
  return (
    <div
      className="absolute z-20 touch-none select-none"
      style={{
        left: `${50 + position.x}%`,
        top: `${50 + position.y}%`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="flex flex-col items-center group">
        <div
          className="cursor-pointer relative z-40 flex items-center justify-center transition-all duration-500 group-hover:scale-110 pointer-events-auto"
          onClick={() => setActive(isActive ? null : index)}
          onMouseEnter={() => !isMobile && setActive(index)}
          onMouseLeave={() => !isMobile && setActive(null)}
        >
          {isActive && (
            <>
              <div className="absolute inset-0 rounded-full bg-strategic-blue/15 animate-pulse scale-[3] shadow-[0_0_40px_rgba(59,130,246,0.4)]" />
              <div className="absolute inset-0 rounded-full border-2 border-strategic-blue/40 scale-[2.5] animate-ping" />
            </>
          )}

          <div className={`absolute inset-0 rounded-full transition-all duration-500 ${
            isActive
              ? 'bg-strategic-blue/30 scale-[2] shadow-[0_0_30px_rgba(59,130,246,0.5)]'
              : 'bg-white/5 group-hover:bg-strategic-blue/20 group-hover:scale-150'
          }`} style={{ width: '100%', height: '100%' }} />

          <div className={`absolute inset-0 rounded-full border transition-all duration-500 ${
            isActive
              ? 'border-strategic-blue/60 scale-[2.2]'
              : 'border-white/10 group-hover:border-strategic-blue/40 group-hover:scale-[2]'
          }`} />

          <div className={`w-3.5 h-3.5 md:w-4.5 md:h-4.5 rounded-full transition-all duration-500 relative z-10 border-2 ${
            isActive
              ? 'bg-strategic-blue shadow-[0_0_20px_rgba(59,130,246,1)] scale-125 border-white'
              : 'bg-white/50 group-hover:bg-strategic-blue/80 group-hover:scale-110 border-white/20 group-hover:border-strategic-blue/60 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)]'
          }`} />
        </div>

        <div className={`w-[1px] h-3 transition-colors duration-300 -mt-1 ${
          isActive ? 'bg-strategic-blue/60' : 'bg-white/20'
        }`} />

        <div
          className={`px-3 py-1.5 md:px-4 md:py-2 border transition-all duration-500 backdrop-blur-sm cursor-pointer whitespace-nowrap select-none overflow-hidden ${
            isActive
              ? 'border-strategic-blue/80 bg-black shadow-[0_0_25px_rgba(59,130,246,0.2)] scale-105'
              : 'border-white/10 bg-black/60 group-hover:border-strategic-blue/50 group-hover:bg-black/80 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] group-hover:scale-105'
          }`}
          onClick={() => setActive(isActive ? null : index)}
        >
          <span className={`text-[9px] md:text-[10px] font-mono uppercase tracking-[0.25em] transition-all duration-500 ${
            isActive ? 'text-clean-white font-bold' : 'text-clean-white/80 group-hover:text-strategic-blue/90 group-hover:font-semibold'
          }`}>
            {isMobile ? principle.code : principle.title}
          </span>
        </div>
      </div>
    </div>
  );
}, (prevProps, nextProps) =>
  prevProps.isActive === nextProps.isActive &&
  prevProps.isMobile === nextProps.isMobile
);

export default PrinciplesSection;
