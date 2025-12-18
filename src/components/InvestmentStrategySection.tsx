import { Badge } from "./ui/badge";

const InvestmentStrategySection = () => {
  return (
    <section className="py-24 bg-dimensional-gray text-clean-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-clean-white tracking-[0.2em] uppercase mb-16">
            INVESTMENT STRATEGIES
          </h2>
        </div>

        {/* Strategy Card */}
        <div className="max-w-4xl mx-auto bg-deep-black border border-depth-gray/30 p-8 md:p-12 rounded-sm shadow-xl relative overflow-hidden">
           {/* Top accent */}
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-strategic-blue to-transparent"></div>

           <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="flex-1">
               <div className="flex items-center space-x-3 mb-4">
                 <h3 className="text-2xl font-bold tracking-wide text-clean-white">
                   Private Credit (Brazil)
                 </h3>
                 <Badge variant="outline" className="border-strategic-blue text-strategic-blue">ACTIVE</Badge>
               </div>
               
               <p className="text-depth-gray leading-relaxed mb-8">
                 Short-term, receivables-backed credit exposures originated by regulated local credit managers, securitizers, and funds.
               </p>

               <div className="grid grid-cols-2 gap-y-6 gap-x-8">
                 <div>
                   <div className="text-xs text-depth-gray font-mono uppercase mb-1">Duration</div>
                   <div className="text-lg font-medium text-clean-white">30–120 days</div>
                 </div>
                 <div>
                   <div className="text-xs text-depth-gray font-mono uppercase mb-1">Collateral</div>
                   <div className="text-lg font-medium text-clean-white">Trade & Financial</div>
                 </div>
                 <div>
                   <div className="text-xs text-depth-gray font-mono uppercase mb-1">Currency</div>
                   <div className="text-lg font-medium text-clean-white">BRL (USD access)</div>
                 </div>
                  <div>
                   <div className="text-xs text-depth-gray font-mono uppercase mb-1">Target Profile</div>
                   <div className="text-lg font-medium text-clean-white">Income / Defensive</div>
                 </div>
               </div>
             </div>
           </div>
        </div>

        {/* Coming Soon Note */}
        <div className="text-center mt-12 text-depth-gray text-sm italic">
          Additional credit verticals will be introduced over time as the platform expands across sectors and regions.
        </div>
      </div>
    </section>
  );
};

export default InvestmentStrategySection;
