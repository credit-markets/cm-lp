import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const AccessArchitecture = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      email: formData.get('email'),
      telegram: formData.get('telegram'),
      investment: formData.get('investment'),
      type: formData.get('type'),
    };

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        console.error('Submission failed');
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Error submitting form.");
    } finally {
      setIsLoading(false);
    }
  };

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
            
            {isSuccess ? (
              <div className="text-center py-16 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-strategic-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-strategic-blue"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h3 className="text-2xl font-bold text-clean-white mb-2">Request Received</h3>
                <p className="text-depth-gray">We'll be in touch shortly.</p>
                <Button 
                  onClick={() => setIsSuccess(false)}
                  variant="outline" 
                  className="mt-8 border-depth-gray/30 hover:bg-white/5"
                >
                  Send another request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-mono text-strategic-blue uppercase tracking-wider">Email Address</Label>
                    <Input 
                      required
                      name="email"
                      id="email" 
                      type="email" 
                      placeholder="name@institution.com" 
                      className="bg-deep-black/50 border-depth-gray/50 text-clean-white focus:border-strategic-blue/50 focus:ring-strategic-blue/20 placeholder:text-depth-gray/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telegram" className="text-xs font-mono text-strategic-blue uppercase tracking-wider">Telegram ID</Label>
                    <Input 
                      name="telegram"
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
                    name="investment"
                    id="investment" 
                    type="text" 
                    placeholder="$100k - $5M+" 
                    className="bg-deep-black/50 border-depth-gray/50 text-clean-white focus:border-strategic-blue/50 focus:ring-strategic-blue/20 placeholder:text-depth-gray/30"
                  />
                </div>

                <div className="space-y-4 pt-2">
                  <Label className="text-xs font-mono text-strategic-blue uppercase tracking-wider">Investor Type</Label>
                  <RadioGroup name="type" defaultValue="institutional" className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-strategic-blue hover:bg-strategic-blue/90 text-deep-black font-bold tracking-wider py-6 text-lg relative group overflow-hidden disabled:opacity-70"
                  >
                    <span className="relative z-10">{isLoading ? 'SUBMITTING...' : 'SUBMIT REQUEST'}</span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Button>
                  <div className="text-center mt-4">
                     <p className="text-xs text-depth-gray/50 font-mono">By submitting, you agree to our Terms and Policy.</p>
                  </div>
                </div>
              </form>
            )}
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