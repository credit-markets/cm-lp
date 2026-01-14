import { motion } from "framer-motion";
import { useState, useEffect } from "react";


const principles = [
  { title: "Capital Preservation", desc: "Our primary mandate is the protection of principal through rigorous risk management." },
  { title: "Compliance First", desc: "Regulatory adherence is rigorously enforced in every transaction structure." },
  { title: "Aligned Incentives", desc: "We structure deals to ensure skin in the game and mutual success." },
  { title: "Data First", desc: "Decisions are driven by real-time, observable underlying asset performance." },
  { title: "Radical Transparency", desc: "Full, unhindered visibility into collateral, flows, and documentation." },
  { title: "Institutional Standards", desc: "Built to satisfy the rigorous operational requirements of global allocators." },
  { title: "Trust Minimized", desc: "We rely on verification and cryptographic enforcement, not promises." }
];

const PrinciplesSection = () => {
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);
  const [rotation1, setRotation1] = useState(0);
  const [rotation2, setRotation2] = useState(0);

  // Animate the node positions - opposite directions, visible speed
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation1(prev => (prev + 0.064) % 360); // Clockwise (20% slower)
      setRotation2(prev => (prev - 0.048) % 360); // Counter-clockwise (20% slower)
    }, 16);
    return () => clearInterval(interval);
  }, []);

  // Orbit config - BIGGER
  const orbitSize = 420; // Bigger circles
  const orbitOffset = 110; // Larger offset = bigger intersection area
  const orbitRadius = orbitSize / 2;
  
  // Calculate node positions on orbit
  const getNodePosition = (baseAngle: number, rotation: number, radius: number) => {
    const angle = ((baseAngle + rotation) * Math.PI) / 180;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
    };
  };

  // Left orbit nodes (4 nodes) - evenly distributed on LEFT arc with 45° spacing
  const leftNodes = [
    { angle: 270, principle: principles[0] }, // Top (12 o'clock)
    { angle: 225, principle: principles[1] }, // Upper-left (10:30)
    { angle: 180, principle: principles[2] }, // Left (9 o'clock)
    { angle: 135, principle: principles[3] }, // Lower-left (7:30)
  ];

  // Right orbit nodes (3 nodes) - evenly distributed on RIGHT arc with 60° spacing
  const rightNodes = [
    { angle: 315, principle: principles[4] }, // Upper-right (1:30)
    { angle: 0, principle: principles[5] },   // Right (3 o'clock)
    { angle: 45, principle: principles[6] },  // Lower-right (4:30)
  ];

  return (
    <section id="principles" className="py-24 bg-deep-black relative overflow-hidden min-h-[900px] flex items-center justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.03),transparent_70%)]"></div>
      <div className="absolute inset-0 opacity-[0.05]" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-depth-gray tracking-[0.2em] uppercase mb-4">
            OUR PRINCIPLES
          </h2>
          <h3 className="text-2xl md:text-3xl font-light text-clean-white leading-relaxed max-w-3xl mx-auto">
            Non-negotiable standards that secure capital and align incentives.
          </h3>
        </div>

        {/* Orbital Visualization - Centered Container */}
        <div className="relative w-full flex items-center justify-center" style={{ height: `${orbitSize + 200}px` }}>
           
           {/* Left Circle Ring - Subtle floating animation */}
           <motion.div 
             className="absolute border border-strategic-blue/20 rounded-full pointer-events-none"
             style={{ 
               width: `${orbitSize}px`, 
               height: `${orbitSize}px`,
               left: `calc(50% - ${orbitOffset}px)`,
               top: '50%',
               x: '-50%',
               y: '-50%',
             }}
             animate={{
               x: ['-50%', '-52%', '-50%', '-48%', '-50%'],
               y: ['-50%', '-48%', '-50%', '-52%', '-50%'],
             }}
             transition={{
               duration: 20,
               repeat: Infinity,
               ease: "easeInOut",
             }}
           />

           {/* Right Circle Ring - Subtle floating animation */}
           <motion.div 
             className="absolute border border-strategic-blue/20 rounded-full pointer-events-none"
             style={{ 
               width: `${orbitSize}px`, 
               height: `${orbitSize}px`,
               right: `calc(50% - ${orbitOffset}px)`,
               top: '50%',
               x: '50%',
               y: '-50%',
             }}
             animate={{
               x: ['50%', '52%', '50%', '48%', '50%'],
               y: ['-50%', '-52%', '-50%', '-48%', '-50%'],
             }}
             transition={{
               duration: 25,
               repeat: Infinity,
               ease: "easeInOut",
             }}
           />

           {/* Left Orbit Nodes - Orbiting along the left circle */}
           {leftNodes.map((node, idx) => {
             const pos = getNodePosition(node.angle, rotation1, orbitRadius);
             return (
               <div
                 key={`left-${idx}`}
                 className="absolute pointer-events-auto"
                 style={{
                   left: `calc(50% - ${orbitOffset}px + ${pos.x}px)`,
                   top: `calc(50% + ${pos.y}px)`,
                   transform: 'translate(-50%, -50%)',
                   zIndex: 10,
                 }}
               >
                 <PrincipleNode 
                   index={idx} 
                   principle={node.principle} 
                   activeIndex={activePrinciple} 
                   setActive={setActivePrinciple} 
                 />
               </div>
             );
           })}

           {/* Right Orbit Nodes - Orbiting along the right circle */}
           {rightNodes.map((node, idx) => {
             const pos = getNodePosition(node.angle, rotation2, orbitRadius);
             return (
               <div
                 key={`right-${idx}`}
                 className="absolute pointer-events-auto"
                 style={{
                   left: `calc(50% + ${orbitOffset}px + ${pos.x}px)`,
                   top: `calc(50% + ${pos.y}px)`,
                   transform: 'translate(-50%, -50%)',
                   zIndex: 10,
                 }}
               >
                 <PrincipleNode 
                   index={idx + 4} 
                   principle={node.principle} 
                   activeIndex={activePrinciple} 
                   setActive={setActivePrinciple} 
                 />
               </div>
             );
           })}

           {/* Central Vertical Glow Line */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[320px] bg-gradient-to-b from-transparent via-strategic-blue/50 to-transparent blur-sm animate-pulse pointer-events-none z-5"></div>

           {/* Blue Friction Particles */}
           <motion.div 
             animate={{ opacity: [0, 1, 0], x: [0, 30, 50] }}
             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 left-[45%] w-2 h-[1px] bg-strategic-blue pointer-events-none"
           />
           <motion.div 
             animate={{ opacity: [0, 1, 0], x: [0, -30, -50] }}
             transition={{ duration: 2.5, repeat: Infinity, ease: "linear", delay: 0.5 }}
             className="absolute top-[45%] right-[45%] w-2 h-[1px] bg-strategic-blue pointer-events-none"
           />

           {/* Center Logo & Description - Fixed at intersection - BIGGER */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] text-center pointer-events-none z-20">
              <div className={`transition-all duration-500 transform ${activePrinciple !== null ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                 <div className="w-16 h-16 mx-auto mb-4 text-strategic-blue">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.31 319.89" className="w-full h-full fill-current">
                       <path d="M186.07,211.97c1.37,1.11,2.73,1.98,3.79,3.12,10.3,11.07,20.55,22.19,30.81,33.29,1.44,1.56,2.73,3.31,4.38,4.62,2.42,1.91,2.21,3.79.8,6.16-15.19,25.48-36.23,44.24-64.23,54.32-19.14,6.9-39.12,7.61-59.22,5.05-40.12-5.11-69.14-26.49-88.29-61.48C4.98,240.36.48,221.88.25,203.01c-.37-30.72-.62-61.56,1.53-92.18C4.32,74.74,20.74,44.78,49.51,22.46,67.25,8.69,88.05,1.99,110.35.59c16.63-1.04,33.23-.4,49.47,4.07,9.99,2.75,19.17,7.13,27.58,13.15,14.4,10.3,25.57,23.78,36.77,37.24,2.06,2.47.29,4.48-1.02,6.39-7.45,10.95-14.95,21.87-22.45,32.79-2.76,4.02-5.49,8.06-8.36,11.99-3.89,5.34-4.94,5.19-9.23.32-9.16-10.39-17.86-21.31-27.93-30.74-16.23-15.2-35.8-20.34-56.4-10.73-20.15,9.4-33.26,25.53-35.1,48.66-.89,11.19-.64,22.48-.7,33.73-.1,17.5-.18,35.01.03,52.51.07,5.71.66,11.5,1.74,17.11,2.65,13.81,10.97,24.09,22.22,31.75,24.67,16.79,57.21,17.11,80.15-10.87,6.16-7.52,11.5-15.72,17.21-23.61.5-.69,1.01-1.38,1.73-2.37Z"/>
                       <path d="M359.03.45c.06,1.32.14,2.64.14,3.74.07,18.25.22,36.5.08,54.75-.02,2.68-.86,5.77-2.35,7.97-33.74,49.58-67.63,99.07-101.5,148.57-2.94,4.29-3.24,4.33-6.88.68-11.39-11.41-22.7-22.91-34.16-34.24-2.98-2.95-3.3-6.08-1.58-9.51,1.45-2.89,3.18-5.67,5.01-8.34,35.55-51.98,71.28-103.84,106.52-156.03,4.2-6.22,8.18-7.78,15.56-7.99,6.09-.18,11.73.3,17.6.4.37,0,.73.02,1.55.01Z"/>
                       <path d="M358.81,134.7v183.68h-61.01c-.17-3.08-.46-6.04-.47-8.99-.07-26.88-.17-53.77-.02-80.65.01-2.68,1.03-5.73,2.55-7.95,18.63-27.38,37.44-54.64,56.2-81.93.74-1.08,1.45-2.18,2.76-4.15Z"/>
                    </svg>
                 </div>
                 <p className="text-depth-gray text-sm tracking-widest uppercase">Select a principle</p>
              </div>
              
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] transition-all duration-300 transform ${activePrinciple !== null ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'}`}>
                {activePrinciple !== null && (
                  <div className="bg-deep-black/90 backdrop-blur-xl border border-strategic-blue/30 p-5 rounded-lg shadow-2xl">
                    <h4 className="text-strategic-blue font-bold uppercase text-sm mb-2 tracking-wider">
                      {principles[activePrinciple].title}
                    </h4>
                    <p className="text-white text-base font-light leading-relaxed">
                       {principles[activePrinciple].desc}
                    </p>
                  </div>
                )}
              </div>
           </div>

        </div>
      </div>
    </section>
  );
};

const PrincipleNode = ({ index, principle, activeIndex, setActive }: { index: number, principle: { title: string, desc: string }, activeIndex: number | null, setActive: (i: number | null) => void }) => {
  const isActive = activeIndex === index;
  
  const handleClick = () => {
    // Toggle: if already active, deactivate; otherwise activate
    setActive(isActive ? null : index);
  };
  
  return (
    <div 
      className="group cursor-pointer"
      onMouseEnter={() => setActive(index)}
      onMouseLeave={() => setActive(null)}
      onClick={handleClick}
      onTouchEnd={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <div className="flex flex-col items-center gap-2">
        {/* Node - White Star Style */}
        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive ? 'bg-clean-white scale-150 shadow-[0_0_20px_white]' : 'bg-clean-white shadow-[0_0_10px_rgba(255,255,255,0.5)] group-hover:scale-125'}`}></div>
        
        {/* Label */}
        <div className={`bg-deep-black/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full transition-all duration-300 ${isActive ? 'border-strategic-blue/50 text-strategic-blue' : 'text-depth-gray group-hover:text-clean-white'}`}>
           <span className="text-[10px] md:text-xs font-mono uppercase tracking-wider whitespace-nowrap">{principle.title}</span>
        </div>
      </div>
    </div>
  );
};

export default PrinciplesSection;
