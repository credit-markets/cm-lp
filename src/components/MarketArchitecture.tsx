import { memo } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const MarketArchitecture = memo(() => {
  const isMobile = useIsMobile();

  return (
    <section id="opportunity" className="py-24 bg-dimensional-gray overflow-hidden below-fold-section">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl mx-auto">
          
          {/* Left Column: Narrative */}
          <div className="flex-1 space-y-8 z-10">
            <div>
            <h2 className="text-section font-bold text-depth-gray tracking-[0.2em] uppercase mb-4">
                THE OPPORTUNITY
            </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-clean-white leading-tight mb-6">
                A paradox of liquidity
              </h3>
              <p className="text-xl text-depth-gray leading-relaxed font-light mb-8">
                Useable capital is abundant, yet the infrastructure to deploy it safely is missing.
              </p>
              <p className="text-xl text-depth-gray leading-relaxed font-light">
                We bridge this gap by connecting high-grade, short-term receivables with institutional capital through a transparent, compliant infrastructure.
              </p>
            </div>

            <div className="pt-8 border-t border-depth-gray/20">
              <div className="flex items-baseline space-x-4 mb-2">
                <span className="text-6xl md:text-7xl font-bold text-strategic-blue font-mono tracking-tighter">
                  $1T
                </span>
                <span className="text-clean-white text-lg font-medium tracking-wide uppercase">
                  Unmet Credit Demand
                </span>
              </div>
              <p className="text-depth-gray text-sm font-mono uppercase tracking-wider mb-8">
                FOR SMBs IN LATAM ALONE
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 rounded-sm bg-deep-black/50 border border-depth-gray/10">
                   <div className="w-2 h-2 mt-2 bg-strategic-blue rounded-full shrink-0 animate-pulse"
                        style={{ willChange: 'opacity', transform: 'translateZ(0)' }}></div>
                   <p className="text-clean-white text-base">
                     <span className="text-strategic-blue font-bold">Brazil ($593B)</span> represents the largest and most mature credit market in the region.
                   </p>
                </div>
                <div className="bg-deep-black/30 p-4 rounded-sm border-l-2 border-depth-gray/30">
                   <p className="text-depth-gray italic mb-3">
                     "Local credit originators lack access to a broader investor base, while global investors struggle to deploy capital efficiently."
                   </p>
                   <p className="text-strategic-blue font-mono text-xs uppercase tracking-wider">
                     — Lucas Britto, CEO
                   </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Connectivity Hub (Abstract) */}
          <div className="flex-1 relative w-full aspect-square md:aspect-auto md:h-[600px] items-center justify-center hidden md:flex">
             
             {/* Center Glow - Performance Optimized */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none opacity-50"
                  style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)' }}></div>

             {/* Tech Grid Background (Subtle) */}
             <div className="absolute inset-0 opacity-[0.05]" 
                  style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
             </div>

             <div className="relative w-full max-w-[500px] h-[500px]">
               {/* Orbital Rings */}
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-depth-gray/20 rounded-full ${isMobile ? '' : 'animate-[spin_60s_linear_infinite]'}`}
                    style={{ willChange: 'transform', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}></div>
               <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-depth-gray/10 rounded-full ${isMobile ? '' : 'animate-[spin_40s_linear_infinite_reverse]'}`}
                    style={{ willChange: 'transform', transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}></div>

               {/* Central Hub (Brazil) */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                 <div className="relative">
                   <div className="w-24 h-24 bg-deep-black border-2 border-strategic-blue rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.2)] z-10"
                        style={{ willChange: 'box-shadow' }}>
                      <div className="text-center">
                        <div className="text-xs text-depth-gray font-mono">LATAM</div>
                        <div className="text-xl font-bold text-clean-white">BRAZIL</div>
                      </div>
                   </div>
                   {/* Pulsing rings */}
                   <div className={`absolute inset-0 border border-strategic-blue rounded-full opacity-20 ${isMobile ? '' : 'animate-ping'}`}
                        style={{ willChange: 'transform, opacity', transform: 'translateZ(0)' }}></div>
                   <div className={`absolute -inset-4 border border-strategic-blue/30 rounded-full opacity-20 ${isMobile ? '' : 'animate-pulse'}`}
                        style={{ willChange: 'opacity', transform: 'translateZ(0)' }}></div>
                 </div>
               </div>

               {/* Satellite Nodes (Global Investors) */}
               {/* Node 1: Top Right */}
               <div className={`absolute top-[20%] right-[20%] ${isMobile ? '' : 'animate-pulse'}`}
                    style={{ willChange: 'opacity' }}>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-clean-white rounded-full"
                         style={{ transform: 'translateZ(0)' }}></div>
                    <div className="text-xs font-mono text-depth-gray">GLOBAL CAPITAL</div>
                  </div>
                  {/* Connection Line */}
                  <svg className="absolute top-3 right-3 w-32 h-32 -z-10 text-strategic-blue/30 overflow-visible">
                    <line x1="0" y1="0" x2="-80" y2="100" stroke="currentColor" strokeDasharray="4 4" />
                  </svg>
               </div>

               {/* Node 2: Bottom Left */}
               <div className={`absolute bottom-[25%] left-[15%] ${isMobile ? '' : 'animate-pulse delay-700'}`}
                    style={{ willChange: 'opacity' }}>
                  <div className="flex items-center space-x-2">
                    <div className="text-xs font-mono text-depth-gray text-right">LIQUIDITY</div>
                    <div className="w-3 h-3 bg-clean-white rounded-full"
                         style={{ transform: 'translateZ(0)' }}></div>
                  </div>
                  {/* Connection Line */}
                  <svg className="absolute bottom-3 left-3 w-32 h-32 -z-10 text-strategic-blue/30 overflow-visible">
                    <line x1="0" y1="0" x2="100" y2="-80" stroke="currentColor" strokeDasharray="4 4" />
                  </svg>
               </div>

               {/* Node 3: Top Left (Data) */}
               <div className="absolute top-[30%] left-[20%]">
                 <div className="bg-dimensional-gray/80 backdrop-blur-sm border border-depth-gray/30 p-2 rounded-sm">
                   <div className="text-[10px] text-strategic-blue font-mono mb-1">UNMET DEMAND</div>
                   <div className="text-lg font-bold text-clean-white leading-none">$1T</div>
                 </div>
               </div>
               
               {/* Node 4: Bottom Right (Yield) */}
               <div className="absolute bottom-[30%] right-[15%]">
                 <div className="bg-dimensional-gray/80 backdrop-blur-sm border border-depth-gray/30 p-2 rounded-sm">
                   <div className="text-[10px] text-strategic-blue font-mono mb-1">TARGET YIELD</div>
                   <div className="text-lg font-bold text-clean-white leading-none">HIGH</div>
                 </div>
               </div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
});

MarketArchitecture.displayName = 'MarketArchitecture';

export default MarketArchitecture;