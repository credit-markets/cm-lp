import { ShieldCheck, Globe, FileText, Scale, Landmark } from "lucide-react";

const LegalStructureSection = () => {
  return (
    <section className="py-24 bg-deep-black text-clean-white relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-clean-white tracking-[0.2em] uppercase mb-8">
            STRUCTURE & COMPLIANCE
          </h2>
          <h3 className="text-2xl font-bold mb-4">
            Built on regulated financial rails
          </h3>
          <div className="max-w-4xl mx-auto">
             <p className="text-lg text-depth-gray leading-relaxed">
              Credit Markets utilizes a structured offshore-onshore framework designed to meet international compliance standards while accessing local credit markets.
            </p>
          </div>
        </div>

        {/* Split Layout Diagram */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Offshore Side */}
          <div className="bg-dimensional-gray border border-depth-gray/30 p-8 rounded-sm relative overflow-hidden group hover:border-strategic-blue/50 transition-colors duration-300">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <Globe className="w-24 h-24" />
             </div>
             
             <div className="flex items-center space-x-3 mb-6">
                <div className="w-2 h-2 bg-strategic-blue rounded-full"></div>
                <h3 className="text-xl font-bold tracking-wider">OFFSHORE</h3>
             </div>
             
             <ul className="space-y-6 text-depth-gray font-mono text-sm relative z-10">
               <li className="flex items-start">
                 <Landmark className="w-5 h-5 mr-3 text-strategic-blue shrink-0" />
                 <span>Offshore feeder fund domiciled in The Bahamas, serving as the primary vehicle for foreign capital</span>
               </li>
               <li className="flex items-start">
                 <ShieldCheck className="w-5 h-5 mr-3 text-strategic-blue shrink-0" />
                 <span>Investor onboarding through comprehensive KYC and AML procedures</span>
               </li>
             </ul>
          </div>

          {/* Onshore Side */}
          <div className="bg-clean-white text-deep-black p-8 rounded-sm relative overflow-hidden group hover:shadow-lg transition-all duration-300">
             <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
               <Globe className="w-24 h-24" />
             </div>

             <div className="flex items-center space-x-3 mb-6">
                <div className="w-2 h-2 bg-strategic-blue rounded-full"></div>
                <h3 className="text-xl font-bold tracking-wider">ONSHORE (BRAZIL)</h3>
             </div>

             <ul className="space-y-6 text-depth-gray font-mono text-sm relative z-10">
               <li className="flex items-start">
                 <FileText className="w-5 h-5 mr-3 text-strategic-blue shrink-0" />
                 <span>Brazil market access via the Non-Resident Investor (INR) regime, governed by Brazil’s Central Bank and CMN Resolution 4,373</span>
               </li>
               <li className="flex items-start">
                 <Scale className="w-5 h-5 mr-3 text-strategic-blue shrink-0" />
                 <span>Onshore allocation into regulated Brazilian credit funds and originators, operating under CVM and BCB oversight</span>
               </li>
             </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-clean-white font-medium">
             This structure ensures transparency, regulatory alignment, and enforceability across jurisdictions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LegalStructureSection;
