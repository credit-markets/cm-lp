const HowWeDoItSection = () => {
  const steps = [
    {
      number: "01",
      title: "Transparency and verified data",
      description: "Tokenized credit enables real-time visibility and reporting across the credit lifecycle"
    },
    {
      number: "02",
      title: "Duration discipline", 
      description: "Short-term opportunities (30–120 days) to reduce macro and liquidity risk"
    },
    {
      number: "03", 
      title: "Recovery and legal certainty",
      description: "Operating in jurisdictions with reliable receivables regulation, starting with Brazil"
    },
    {
      number: "04",
      title: "Reduced friction",
      description: "On-chain settlement and stablecoin rails simplify capital movement and FX conversion"
    }
  ];

  return (
    <section className="py-24 bg-clean-white text-deep-black">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-section font-bold text-deep-black tracking-[0.2em] uppercase">
            HOW WE DO IT
          </h2>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-depth-gray/30"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative pl-12 md:pl-24">
                {/* Number Bubble */}
                <div className="absolute left-0 top-0 w-16 h-16 bg-white border-2 border-strategic-blue text-strategic-blue flex items-center justify-center font-bold text-xl rounded-full z-10 -translate-x-1/2 md:translate-x-0 md:left-0 shadow-sm">
                  {step.number}
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-3 text-deep-black tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-lg text-depth-gray leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoItSection;
