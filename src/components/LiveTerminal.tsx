import { useEffect, useState } from "react";

const LiveTerminal = () => {
  const [currentLine, setCurrentLine] = useState(0);
  
  const terminalData = [
    "> TOTAL VALUE LOCKED.........$12.4M",
    "> ACTIVE POOLS...............8 RUNNING", 
    "> AVG APY....................15.7%",
    "> DEFAULT RATE...............0.12%",
    "> LAST SETTLEMENT............14:23:01 UTC",
    "> NEXT POOL OPENS............2H 34M"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % terminalData.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-deep-black terminal-scanlines">
      <div className="container mx-auto px-6">
        {/* Terminal Header */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-3 h-3 bg-terminal-green rounded-full"></div>
            <div className="w-3 h-3 bg-terminal-amber rounded-full"></div>
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-terminal-green font-mono text-sm ml-4">
              CREDIT MARKETS TERMINAL v2.1
            </span>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-deep-black border border-strategic-blue/30 p-8 font-mono text-terminal shadow-terminal">
            {terminalData.map((line, index) => (
              <div 
                key={index}
                className={`mb-4 transition-all duration-500 ${
                  index === currentLine 
                    ? 'text-strategic-blue shadow-terminal' 
                    : index < currentLine 
                    ? 'text-clean-white' 
                    : 'text-depth-gray/50'
                }`}
              >
                {line}
                {index === currentLine && (
                  <span className="text-strategic-blue animate-cursor-blink ml-2">_</span>
                )}
              </div>
            ))}
            
            {/* Input Line */}
            <div className="mt-8 text-strategic-blue">
              <span className="opacity-70">$ </span>
              <span className="terminal-cursor">MONITORING_LIVE_DATA</span>
            </div>
          </div>

          {/* Terminal Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-data font-mono text-strategic-blue mb-2">
                99.88%
              </div>
              <div className="text-depth-gray text-sm tracking-wider uppercase">
                UPTIME
              </div>
            </div>
            <div className="text-center">
              <div className="text-data font-mono text-strategic-blue mb-2">
                &lt;1ms
              </div>
              <div className="text-depth-gray text-sm tracking-wider uppercase">
                LATENCY
              </div>
            </div>
            <div className="text-center">
              <div className="text-data font-mono text-strategic-blue mb-2">
                24/7
              </div>
              <div className="text-depth-gray text-sm tracking-wider uppercase">
                MONITORING
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(48)].map((_, i) => (
            <div key={i} className="border-l border-strategic-blue"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveTerminal;