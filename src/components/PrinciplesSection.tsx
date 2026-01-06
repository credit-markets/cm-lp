import { motion, useReducedMotion } from "framer-motion";
import { useState, memo } from "react";
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
  { x: 0, y: -35 },    // Top center
  { x: -32, y: -18 },  // Upper-left
  { x: -36, y: 15 },   // Lower-left
  { x: -12, y: 38 },   // Bottom-left
  { x: 18, y: 36 },    // Bottom-right
  { x: 38, y: 8 },     // Right
  { x: 28, y: -22 },   // Upper-right
];

const mobilePositions = [
  { x: 0, y: -38 },    // Top
  { x: -28, y: -20 },  // Upper-left
  { x: -30, y: 12 },   // Lower-left
  { x: -10, y: 35 },   // Bottom-left
  { x: 15, y: 32 },    // Bottom-right
  { x: 30, y: 5 },     // Right
  { x: 25, y: -25 },   // Upper-right
];

// Constellation connections (adjacent stars)
const constellationLines = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 0], // Outer ring
  [1, 6], [2, 4], // Cross connections
];

const PrinciplesSection = () => {
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const nodePositions = isMobile ? mobilePositions : desktopPositions;

  return (
    <section id="principles" className="py-16 md:py-24 bg-deep-black relative overflow-hidden min-h-[650px] md:min-h-[850px]">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-[0.05]"
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Nebula-style layered glows - Optimized using radial gradients instead of heavy blurs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full pointer-events-none"
           style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full pointer-events-none animate-pulse"
           style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.05) 0%, transparent 70%)' }}></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-xs md:text-section font-bold text-depth-gray tracking-[0.2em] uppercase mb-3 md:mb-4">
            OUR PRINCIPLES
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-clean-white leading-relaxed max-w-3xl mx-auto px-4">
            Non-negotiable standards that secure capital and align incentives.
          </h3>
        </div>

        {/* Constellation Container */}
        <div className="relative w-full max-w-[400px] md:max-w-[850px] h-[420px] md:h-[580px] mx-auto flex items-center justify-center constellation-container">

          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            <defs>
              {/* Gradient for energy pulse effect */}
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

            {/* Constellation lines between adjacent stars */}
            {constellationLines.map(([from, to], idx) => {
              const fromPos = nodePositions[from];
              const toPos = nodePositions[to];
              const isConnected = activePrinciple === from || activePrinciple === to;

              return (
                <g key={`constellation-${idx}`}>
                  {/* Base constellation line */}
                  <motion.line
                    x1={`${50 + fromPos.x}%`}
                    y1={`${50 + fromPos.y}%`}
                    x2={`${50 + toPos.x}%`}
                    y2={`${50 + toPos.y}%`}
                    stroke={isConnected ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.08)"}
                    strokeWidth={isConnected ? 1.5 : 0.8}
                    strokeDasharray="3 6"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                      pathLength: 1,
                      opacity: 1,
                      stroke: isConnected ? "rgba(59, 130, 246, 0.3)" : "rgba(59, 130, 246, 0.08)",
                    }}
                    transition={{
                      pathLength: { duration: 1.5, delay: idx * 0.1 },
                      opacity: { duration: 0.8, delay: idx * 0.1 },
                      stroke: { duration: 0.3 }
                    }}
                    viewport={{ once: true }}
                  />
                </g>
              );
            })}

            {/* Lines from center to each node */}
            {nodePositions.map((pos, i) => (
              <g key={`line-${i}`}>
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2={`${50 + pos.x}%`}
                  y2={`${50 + pos.y}%`}
                  stroke={activePrinciple === i ? "rgba(59, 130, 246, 0.5)" : "rgba(59, 130, 246, 0.12)"}
                  strokeWidth={activePrinciple === i ? 2 : 1}
                  initial={{ pathLength: 0 }}
                  animate={{
                    pathLength: 1,
                    stroke: activePrinciple === i ? "rgba(59, 130, 246, 0.5)" : "rgba(59, 130, 246, 0.12)",
                  }}
                  transition={{
                    pathLength: { duration: 1, delay: i * 0.1 },
                    stroke: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                />
                {/* Energy pulse on active line */}
                {activePrinciple === i && (
                  <>
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
                    />
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2={`${50 + pos.x}%`}
                      y2={`${50 + pos.y}%`}
                      stroke="rgba(59, 130, 246, 0.15)"
                      strokeWidth={8}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </>
                )}
              </g>
            ))}
          </svg>

          {/* Central Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            {/* Orbital rings */}
            <div className="absolute -inset-12 md:-inset-16 border border-strategic-blue/10 rounded-full animate-[spin_60s_linear_infinite]"></div>
            <div className="absolute -inset-8 md:-inset-10 border border-strategic-blue/15 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>
            <div className="absolute -inset-4 md:-inset-6 border border-strategic-blue/20 rounded-full animate-pulse"></div>

            {/* Main hub */}
            <motion.div
              className="relative w-20 h-20 md:w-28 md:h-28 bg-deep-black border-2 border-strategic-blue/50 rounded-full flex flex-col items-center justify-center shadow-[0_0_40px_rgba(59,130,246,0.25)]"
              animate={{
                scale: activePrinciple !== null ? 0.95 : 1,
                boxShadow: activePrinciple !== null ? "0 0 60px rgba(59,130,246,0.4)" : "0 0 40px rgba(59,130,246,0.25)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 rounded-full bg-strategic-blue/5"></div>

              <div className="relative w-10 h-10 md:w-14 md:h-14 text-strategic-blue">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.31 319.89" className="w-full h-full fill-current">
                  <path d="M186.07,211.97c1.37,1.11,2.73,1.98,3.79,3.12,10.3,11.07,20.55,22.19,30.81,33.29,1.44,1.56,2.73,3.31,4.38,4.62,2.42,1.91,2.21,3.79.8,6.16-15.19,25.48-36.23,44.24-64.23,54.32-19.14,6.9-39.12,7.61-59.22,5.05-40.12-5.11-69.14-26.49-88.29-61.48C4.98,240.36.48,221.88.25,203.01c-.37-30.72-.62-61.56,1.53-92.18C4.32,74.74,20.74,44.78,49.51,22.46,67.25,8.69,88.05,1.99,110.35.59c16.63-1.04,33.23-.4,49.47,4.07,9.99,2.75,19.17,7.13,27.58,13.15,14.4,10.3,25.57,23.78,36.77,37.24,2.06,2.47.29,4.48-1.02,6.39-7.45,10.95-14.95,21.87-22.45,32.79-2.76,4.02-5.49,8.06-8.36,11.99-3.89,5.34-4.94,5.19-9.23.32-9.16-10.39-17.86-21.31-27.93-30.74-16.23-15.2-35.8-20.34-56.4-10.73-20.15,9.4-33.26,25.53-35.1,48.66-.89,11.19-.64,22.48-.7,33.73-.1,17.5-.18,35.01.03,52.51.07,5.71.66,11.5,1.74,17.11,2.65,13.81,10.97,24.09,22.22,31.75,24.67,16.79,57.21,17.11,80.15-10.87,6.16-7.52,11.5-15.72,17.21-23.61.5-.69,1.01-1.38,1.73-2.37Z"/>
                  <path d="M359.03.45c.06,1.32.14,2.64.14,3.74.07,18.25.22,36.5.08,54.75-.02,2.68-.86,5.77-2.35,7.97-33.74,49.58-67.63,99.07-101.5,148.57-2.94,4.29-3.24,4.33-6.88.68-11.39-11.41-22.7-22.91-34.16-34.24-2.98-2.95-3.3-6.08-1.58-9.51,1.45-2.89,3.18-5.67,5.01-8.34,35.55-51.98,71.28-103.84,106.52-156.03,4.2-6.22,8.18-7.78,15.56-7.99,6.09-.18,11.73.3,17.6.4.37,0,.73.02,1.55.01Z"/>
                  <path d="M358.81,134.7v183.68h-61.01c-.17-3.08-.46-6.04-.47-8.99-.07-26.88-.17-53.77-.02-80.65.01-2.68,1.03-5.73,2.55-7.95,18.63-27.38,37.44-54.64,56.2-81.93.74-1.08,1.45-2.18,2.76-4.15Z"/>
                </svg>
              </div>

              {/* Interactive hint */}
              <motion.div
                className="absolute -bottom-8 md:-bottom-10 whitespace-nowrap"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: activePrinciple === null ? [0.4, 0.8, 0.4] : 0, y: 0 }}
                transition={{
                  opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  y: { duration: 0.5 }
                }}
              >
                <span className="text-[9px] md:text-xs text-depth-gray font-mono uppercase tracking-wider">
                  Select one
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Principle Nodes */}
          {principles.map((principle, i) => (
            <PrincipleNode
              key={i}
              index={i}
              principle={principle}
              position={nodePositions[i]}
              isActive={activePrinciple === i}
              setActive={setActivePrinciple}
              isMobile={isMobile}
            />
          ))}

          {/* Active Principle Detail Card */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[190px] md:w-[300px] pointer-events-none z-30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: activePrinciple !== null ? 1 : 0,
              scale: activePrinciple !== null ? 1 : 0.9
            }}
            transition={{ duration: 0.2 }}
          >
            {activePrinciple !== null && (
              <div className="bg-deep-black/95 backdrop-blur-md border border-strategic-blue/30 p-3.5 md:p-5 rounded-sm shadow-[0_0_30px_rgba(59,130,246,0.15)] text-center md:text-left">
                <div className="flex items-center justify-between mb-1.5 md:mb-3">
                  <span className="text-[8px] md:text-[10px] font-mono text-strategic-blue/60 tracking-wider">
                    {principles[activePrinciple].code}
                  </span>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-strategic-blue rounded-full animate-pulse"></div>
                </div>
                <h4 className="text-strategic-blue font-bold uppercase text-[11px] md:text-sm mb-1 md:mb-2 tracking-wide">
                  {principles[activePrinciple].title}
                </h4>
                <p className="text-clean-white/90 text-[11px] md:text-sm font-light leading-relaxed">
                  {principles[activePrinciple].desc}
                </p>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const PrincipleNode = memo(({
  index,
  principle,
  position,
  isActive,
  setActive,
  isMobile
}: {
  index: number,
  principle: { title: string, desc: string, code: string },
  position: { x: number, y: number },
  isActive: boolean,
  setActive: (i: number | null) => void,
  isMobile: boolean
}) => {
  // Unique animation delay for twinkling effect
  const twinkleDelay = index * 0.7;

  const handleInteraction = () => {
    setActive(isActive ? null : index);
  };

  return (
    <div
      className="absolute pointer-events-auto cursor-pointer z-10 group touch-manipulation"
      style={{
        left: `${50 + position.x}%`,
        top: `${50 + position.y}%`,
        transform: 'translate(-50%, -50%)',
        animation: `float-star ${8 + index * 0.5}s ease-in-out ${index * 0.3}s infinite`,
      }}
      onMouseEnter={() => !('ontouchstart' in window) && setActive(index)}
      onMouseLeave={() => !('ontouchstart' in window) && setActive(null)}
      onClick={handleInteraction}
      onTouchEnd={(e) => {
        e.preventDefault();
        handleInteraction();
      }}
    >
      <style>{`
        @keyframes float-star {
          0%, 100% { transform: translate(-50%, -50%) translate(0, 0); }
          33% { transform: translate(-50%, -50%) translate(${Math.sin(index * 0.8) * 4}px, ${Math.cos(index * 0.5) * 4}px); }
          66% { transform: translate(-50%, -50%) translate(${-Math.sin(index * 0.8) * 4}px, ${-Math.cos(index * 0.5) * 4}px); }
        }
        @keyframes twinkle-${index} {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
      `}</style>

      <motion.div
        className="flex flex-col items-center gap-1.5 md:gap-2"
        animate={{ scale: isActive ? 1.15 : 1 }}
        transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      >
        {/* Star node */}
        <div className="relative">
          {/* Outer glow ring - always visible, subtle */}
          <div className="absolute -inset-3 md:-inset-4 rounded-full bg-strategic-blue/5 blur-md"></div>

          {/* Pulsing rings on active */}
          <motion.div
            className="absolute -inset-2 md:-inset-3 border border-strategic-blue/40 rounded-full"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: isActive ? [0.4, 0.8, 0.4] : 0,
              scale: isActive ? [0.9, 1.3, 0.9] : 0.5
            }}
            transition={{
              duration: 2,
              repeat: isActive ? Infinity : 0,
              ease: "easeInOut"
            }}
          />

          {/* Main star with cross glow effect */}
          <div className="relative">
            {/* Star points (cross shape) */}
            {isActive && (
              <>
                <div className="absolute top-1/2 left-1/2 w-0.5 h-8 md:h-10 bg-gradient-to-t from-transparent via-strategic-blue/60 to-transparent blur-sm"
                     style={{ transform: 'translate(-50%, -50%)' }}></div>
                <div className="absolute top-1/2 left-1/2 w-8 md:w-10 h-0.5 bg-gradient-to-r from-transparent via-strategic-blue/60 to-transparent blur-sm"
                     style={{ transform: 'translate(-50%, -50%)' }}></div>
              </>
            )}

            {/* Core star */}
            <div
              className={`relative w-3.5 h-3.5 md:w-5 md:h-5 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-strategic-blue'
                  : 'bg-clean-white'
              }`}
              style={{
                animation: !isActive ? `twinkle-${index} ${4 + twinkleDelay}s ease-in-out ${twinkleDelay}s infinite` : 'none'
              }}
            >
              {/* Horizontal shine lines (blue version) - both sides simultaneously */}
              {isActive && (
                <>
                  <motion.div
                    className="absolute top-1/2 left-full ml-1 h-[1px] w-8 md:w-12 bg-strategic-blue blur-[0.5px]"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: [0, 0.8, 0], scaleX: [0, 1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: 'left' }}
                  />
                  <motion.div
                    className="absolute top-1/2 right-full mr-1 h-[1px] w-8 md:w-12 bg-strategic-blue blur-[0.5px]"
                    initial={{ opacity: 0, scaleX: 0 }}
                    animate={{ opacity: [0, 0.8, 0], scaleX: [0, 1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: 'right' }}
                  />
                </>
              )}
              {/* Inner glow */}
              <div className={`absolute inset-0.5 rounded-full ${
                isActive ? 'bg-strategic-blue/90' : 'bg-clean-white/90'
              }`}></div>

              {/* Center dot */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 rounded-full ${
                isActive ? 'bg-white' : 'bg-clean-white'
              }`}></div>
            </div>
          </div>
        </div>

        {/* Label */}
        <motion.div
          className={`bg-deep-black/90 backdrop-blur-sm border px-2 md:px-3 py-1 md:py-1.5 rounded-sm transition-all duration-300 ${
            isActive
              ? 'border-strategic-blue/50 bg-strategic-blue/10'
              : 'border-depth-gray/20 group-hover:border-strategic-blue/30'
          }`}
          animate={{ y: isActive ? -4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <span className={`text-[7px] md:text-[11px] font-mono uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${
            isActive ? 'text-strategic-blue font-bold' : 'text-depth-gray group-hover:text-strategic-blue/70'
          }`}>
            {isMobile ? principle.code : principle.title}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
});

export default PrinciplesSection;
