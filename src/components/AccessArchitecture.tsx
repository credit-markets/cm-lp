import { Button } from "./ui/button";

const AccessArchitecture = () => {
  const steps = [
    {
      number: "01",
      title: "VERIFICATION",
      description: "Institutional KYC + Compliance Review",
      accent: true
    },
    {
      number: "02", 
      title: "ALLOCATION",
      description: "Minimum $100K USD Deposit Requirement",
      accent: false
    },
    {
      number: "03",
      title: "DEPLOYMENT",
      description: "Select High-Yield Emerging Market Pools",
      accent: false
    }
  ];

  return (
    <section id="access" className="relative overflow-hidden py-24 bg-gradient-depth">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-clean-white tracking-[0.2em] uppercase">
            INSTITUTIONAL ACCESS
          </h2>
        </div>

        {/* Isometric Workflow */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative p-8 text-center transition-all duration-500 hover:scale-105 ${
                  step.accent 
                    ? 'bg-strategic-blue text-deep-black border-2 border-strategic-blue' 
                    : index === 1
                    ? 'bg-dimensional-gray text-clean-white border-2 border-depth-gray'
                    : 'bg-clean-white text-deep-black border-2 border-clean-white'
                }`}
                style={{
                  transform: `perspective(1000px) rotateY(${index * -5}deg) rotateX(5deg)`,
                  marginTop: `${index * 1}rem`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Step Number */}
                <div className="flex items-center justify-center mb-6">
                  <div className={`w-16 h-16 border-2 flex items-center justify-center font-mono text-lg font-bold ${
                    step.accent ? 'border-deep-black' : 'border-current'
                  }`}>
                    {step.number}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="text-xl font-bold tracking-wider mb-4">
                  STEP {step.number}: {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-sm leading-relaxed opacity-80">
                  {step.description}
                </p>

                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-strategic-blue transform -translate-y-1/2 z-10">
                    <div className="absolute right-0 top-1/2 w-2 h-2 bg-strategic-blue transform -translate-y-1/2 rotate-45"></div>
                  </div>
                )}

                {/* Isometric Shadow */}
                <div 
                  className="absolute inset-0 bg-deep-black/20 transform translate-x-3 translate-y-3 -z-10"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                ></div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-4 px-6 py-3 bg-deep-black/50 border border-strategic-blue/30">
                <div className="w-2 h-2 bg-strategic-blue rounded-full animate-pulse"></div>
                <span className="text-clean-white font-mono text-sm tracking-wider">
                  ACCEPTING QUALIFIED INSTITUTIONAL INVESTORS
                </span>
                <div className="w-2 h-2 bg-strategic-blue rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="relative">
              <Button variant="access" size="hero" className="min-w-[300px] relative z-10">
                INITIATE ACCESS
              </Button>
              {/* Animated orbital highlight */}
              <div className="absolute inset-0 rounded-lg">
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-strategic-blue rounded-full animate-orbit -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-8 text-depth-gray font-mono text-sm">
              <p>MINIMUM INVESTMENT: $100,000 USD</p>
              <p>ACCREDITED INVESTORS ONLY</p>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-8 h-full">
            {[...Array(32)].map((_, i) => (
              <div 
                key={i} 
                className="border border-strategic-blue transform rotate-45"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessArchitecture;