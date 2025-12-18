import { TrendingUp, Globe, Building2 } from "lucide-react";

const ValueFlowSection = () => {
  return (
    <section className="py-24 bg-deep-black text-clean-white relative overflow-hidden">
      <div className="container mx-auto px-6">
         {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-section font-bold text-clean-white tracking-[0.2em] uppercase">
            HOW VALUE IS CREATED
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-2">
          
          {/* Investors */}
          <div className="group relative p-8 bg-dimensional-gray/30 backdrop-blur-md border border-depth-gray/20 rounded-sm hover:border-strategic-blue/50 transition-all duration-300">
             <div className="w-12 h-12 bg-strategic-blue/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-strategic-blue/20 transition-colors">
               <TrendingUp className="w-6 h-6 text-strategic-blue" />
             </div>
             <h3 className="text-xl font-bold mb-4 tracking-wide text-clean-white">FOR INVESTORS</h3>
             <p className="text-depth-gray leading-relaxed text-sm">
               Access to short-duration emerging market private credit with returns that are largely uncorrelated to traditional fixed income, backed by real economic activity and enforceable collateral structures.
             </p>
          </div>

          {/* Originators */}
          <div className="group relative p-8 bg-dimensional-gray/30 backdrop-blur-md border border-depth-gray/20 rounded-sm hover:border-strategic-blue/50 transition-all duration-300">
             <div className="w-12 h-12 bg-strategic-blue/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-strategic-blue/20 transition-colors">
               <Globe className="w-6 h-6 text-strategic-blue" />
             </div>
             <h3 className="text-xl font-bold mb-4 tracking-wide text-clean-white">FOR ORIGINATORS</h3>
             <p className="text-depth-gray leading-relaxed text-sm">
               Efficient access to international capital with competitive funding rates, expanded liquidity, and simplified cross-border operations.
             </p>
          </div>

          {/* Borrowers */}
          <div className="group relative p-8 bg-dimensional-gray/30 backdrop-blur-md border border-depth-gray/20 rounded-sm hover:border-strategic-blue/50 transition-all duration-300">
             <div className="w-12 h-12 bg-strategic-blue/10 flex items-center justify-center rounded-sm mb-6 group-hover:bg-strategic-blue/20 transition-colors">
               <Building2 className="w-6 h-6 text-strategic-blue" />
             </div>
             <h3 className="text-xl font-bold mb-4 tracking-wide text-clean-white">FOR BORROWERS</h3>
             <p className="text-depth-gray leading-relaxed text-sm">
               Lower cost of capital through improved market access, enabling sustainable growth without reliance on expensive domestic funding sources.
             </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueFlowSection;
