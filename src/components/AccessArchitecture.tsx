import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const AccessArchitecture = () => {
  return (
    <section id="access" className="relative overflow-hidden py-24 bg-gradient-depth">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-clean-white tracking-[0.2em] uppercase mb-4">
            REQUEST ACCESS
          </h2>
          <p className="text-depth-gray text-lg">
            Join the waitlist for credit markets.
          </p>
        </div>

        {/* Isometric Workflow */}
        <div className="max-w-5xl mx-auto">


          {/* Request Access Form */}
          <div className="max-w-2xl mx-auto bg-dimensional-gray/30 backdrop-blur-md border border-depth-gray/30 p-8 md:p-12 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-strategic-blue to-transparent opacity-50"></div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs font-mono text-strategic-blue uppercase tracking-wider">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@institution.com" 
                    className="bg-deep-black/50 border-depth-gray/50 text-clean-white focus:border-strategic-blue/50 focus:ring-strategic-blue/20 placeholder:text-depth-gray/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telegram" className="text-xs font-mono text-strategic-blue uppercase tracking-wider">Telegram ID</Label>
                  <Input 
                    id="telegram" 
                    type="text" 
                    placeholder="@username" 
                    className="bg-deep-black/50 border-depth-gray/50 text-clean-white focus:border-strategic-blue/50 focus:ring-strategic-blue/20 placeholder:text-depth-gray/30"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="investment" className="text-xs font-mono text-strategic-blue uppercase tracking-wider">Expected Investment Size (USD)</Label>
                <Input 
                  id="investment" 
                  type="text" 
                  placeholder="$100k - $5M+" 
                  className="bg-deep-black/50 border-depth-gray/50 text-clean-white focus:border-strategic-blue/50 focus:ring-strategic-blue/20 placeholder:text-depth-gray/30"
                />
              </div>

              <div className="space-y-4 pt-2">
                <Label className="text-xs font-mono text-strategic-blue uppercase tracking-wider">Investor Type</Label>
                <RadioGroup defaultValue="institutional" className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 border border-depth-gray/30 p-4 rounded-sm hover:border-strategic-blue/30 transition-colors bg-deep-black/30">
                    <RadioGroupItem value="institutional" id="institutional" className="border-strategic-blue text-strategic-blue" />
                    <Label htmlFor="institutional" className="text-clean-white cursor-pointer font-medium">Institutional</Label>
                  </div>
                  <div className="flex items-center space-x-3 border border-depth-gray/30 p-4 rounded-sm hover:border-strategic-blue/30 transition-colors bg-deep-black/30">
                    <RadioGroupItem value="individual" id="individual" className="border-strategic-blue text-strategic-blue" />
                    <Label htmlFor="individual" className="text-clean-white cursor-pointer font-medium">Individual</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="pt-6">
                <Button className="w-full bg-strategic-blue hover:bg-strategic-blue/90 text-deep-black font-bold tracking-wider py-6 text-lg relative group overflow-hidden">
                  <span className="relative z-10">SUBMIT REQUEST</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </Button>
                <div className="text-center mt-4">
                   <p className="text-xs text-depth-gray/50 font-mono">By submitting, you agree to our Terms and Policy.</p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 -z-10">
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