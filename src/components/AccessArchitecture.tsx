import { useId, useState, memo } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useToast } from "@/hooks/use-toast";

interface WaitlistData {
  email: string | null;
  telegram: string | null;
  investment: string | null;
  type: string | null;
}

interface SubmitResponse {
  status?: 'success' | 'duplicate';
  message?: string;
}

const BG_PATTERN_CELLS = Array.from({ length: 32 }, (_, i) => i);

const AccessArchitecture = memo(() => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();
  const emailErrorId = useId();
  const formErrorId = useId();

  const submitMutation = useMutation<SubmitResponse, Error, WaitlistData>({
    mutationFn: async (data: WaitlistData): Promise<SubmitResponse> => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);

      try {
        const response = await fetch("/api/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          let errorMessage = 'Submission failed';
          try {
            const errorData = await response.json();
            errorMessage = errorData.error || errorMessage;
          } catch {
            errorMessage = response.statusText || errorMessage;
          }

          throw new Error(errorMessage);
        }

        return (await response.json()) as SubmitResponse;
      } catch (error) {
        clearTimeout(timeoutId);

        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            throw new Error('Request timed out. Please check your internet connection and try again.');
          }
          if (error.message.includes('Failed to fetch')) {
            throw new Error('Unable to connect. Please check your internet connection.');
          }
        }
        throw error;
      }
    },
    onSuccess: (data) => {
      setIsSuccess(true);
      const isDuplicate = data?.status === 'duplicate';
      toast({
        title: isDuplicate ? "Already Registered" : "Request Received",
        description: isDuplicate
          ? "You're already on our waitlist."
          : "We'll be in touch shortly.",
        variant: "default",
      });
    },
    onError: (error) => {
      const message = error instanceof Error ? error.message : "Error submitting form. Please try again.";
      console.error('Waitlist submission failed', {
        name: error instanceof Error ? error.name : 'unknown',
        message,
      });
      toast({
        title: "Submission Failed",
        description: message,
        variant: "destructive",
      });
    }
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data: WaitlistData = {
      email: formData.get("email") as string,
      telegram: formData.get("telegram") as string,
      investment: formData.get("investment") as string,
      type: formData.get("type") as string,
    };

    submitMutation.mutate(data);
  };

  const hasError = submitMutation.isError;
  const errorMessage = submitMutation.error instanceof Error ? submitMutation.error.message : null;

  return (
    <section
      id="access"
      className="relative overflow-hidden py-24 bg-gradient-depth below-fold-section"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section font-bold text-clean-white tracking-[0.2em] uppercase mb-4">
            REQUEST ACCESS
          </h2>
          <p className="text-depth-gray text-lg">
            Join the Credit Markets waitlist.
          </p>
        </div>

        {/* Isometric Workflow */}
        <div className="max-w-5xl mx-auto">
          {/* Request Access Form */}
          <div className="max-w-2xl mx-auto bg-dimensional-gray/30 backdrop-blur-md border border-depth-gray/30 p-8 md:p-12 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-strategic-blue to-transparent opacity-50"></div>

            {isSuccess ? (
              <div
                role="status"
                aria-live="polite"
                aria-atomic="true"
                className="text-center py-16 animate-in fade-in zoom-in duration-500"
              >
                <div className="w-16 h-16 bg-strategic-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-strategic-blue"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-clean-white mb-2">
                  Request Received
                </h3>
                <p className="text-depth-gray">We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-describedby={hasError ? formErrorId : undefined}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-xs font-mono text-strategic-blue uppercase tracking-wider"
                    >
                      Email Address
                    </Label>
                    <Input
                      required
                      aria-required="true"
                      aria-invalid={hasError || undefined}
                      aria-describedby={hasError ? emailErrorId : undefined}
                      name="email"
                      id="email"
                      type="email"
                      maxLength={254}
                      autoComplete="email"
                      placeholder="name@institution.com"
                      className="bg-deep-black/50 border-depth-gray/50 text-clean-white focus:border-strategic-blue/50 focus:ring-strategic-blue/20 placeholder:text-depth-gray/30"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="telegram"
                      className="text-xs font-mono text-strategic-blue uppercase tracking-wider"
                    >
                      Telegram ID
                    </Label>
                    <Input
                      name="telegram"
                      id="telegram"
                      type="text"
                      maxLength={64}
                      placeholder="@username"
                      className="bg-deep-black/50 border-depth-gray/50 text-clean-white focus:border-strategic-blue/50 focus:ring-strategic-blue/20 placeholder:text-depth-gray/30"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="investment"
                    className="text-xs font-mono text-strategic-blue uppercase tracking-wider"
                  >
                    Expected Investment Size (USD)
                  </Label>
                  <Input
                    name="investment"
                    id="investment"
                    type="text"
                    maxLength={64}
                    placeholder="$100k - $5M+"
                    className="bg-deep-black/50 border-depth-gray/50 text-clean-white focus:border-strategic-blue/50 focus:ring-strategic-blue/20 placeholder:text-depth-gray/30"
                  />
                </div>

                <div className="space-y-4 pt-2">
                  <Label className="text-xs font-mono text-strategic-blue uppercase tracking-wider">
                    Investor Type
                  </Label>
                  <RadioGroup
                    name="type"
                    defaultValue="institutional"
                    aria-label="Investor type"
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-3 border border-depth-gray/30 p-4 rounded-sm hover:border-strategic-blue/30 transition-colors bg-deep-black/30">
                      <RadioGroupItem
                        value="institutional"
                        id="institutional"
                        className="border-strategic-blue text-strategic-blue"
                      />
                      <Label
                        htmlFor="institutional"
                        className="text-clean-white cursor-pointer font-medium"
                      >
                        Institutional
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 border border-depth-gray/30 p-4 rounded-sm hover:border-strategic-blue/30 transition-colors bg-deep-black/30">
                      <RadioGroupItem
                        value="individual"
                        id="individual"
                        className="border-strategic-blue text-strategic-blue"
                      />
                      <Label
                        htmlFor="individual"
                        className="text-clean-white cursor-pointer font-medium"
                      >
                        Individual
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {hasError && (
                  <div
                    id={formErrorId}
                    role="alert"
                    aria-live="assertive"
                    className="text-sm text-red-400 bg-red-950/30 border border-red-900/50 px-4 py-3 rounded-sm"
                  >
                    <span id={emailErrorId}>{errorMessage}</span>
                  </div>
                )}

                <div className="pt-6">
                  <Button
                    type="submit"
                    disabled={submitMutation.isPending}
                    className="w-full bg-strategic-blue hover:bg-strategic-blue/90 text-deep-black font-bold tracking-wider py-6 text-lg relative group overflow-hidden disabled:opacity-70"
                  >
                    <span className="relative z-10">
                      {submitMutation.isPending ? "SUBMITTING..." : "SUBMIT REQUEST"}
                    </span>
                    <div aria-hidden="true" className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Button>
                  <div className="text-center mt-4">
                    <p className="text-xs text-depth-gray/50 font-mono">
                      By submitting, you agree to our{" "}
                      <Link
                        to="/terms"
                        className="text-strategic-blue hover:text-strategic-blue/80 underline underline-offset-2 transition-colors"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        to="/privacy"
                        className="text-strategic-blue hover:text-strategic-blue/80 underline underline-offset-2 transition-colors"
                      >
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Background Pattern */}
        <div aria-hidden="true" className="absolute inset-0 opacity-5 -z-10">
          <div className="grid grid-cols-8 gap-8 h-full">
            {BG_PATTERN_CELLS.map((cell) => (
              <div
                key={`bg-cell-${cell}`}
                className="border border-strategic-blue transform rotate-45"
                style={{ animationDelay: `${cell * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

AccessArchitecture.displayName = 'AccessArchitecture';

export default AccessArchitecture;
