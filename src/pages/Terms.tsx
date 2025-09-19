import Navigation from "@/components/Navigation";
import TerminalFooter from "@/components/TerminalFooter";

const Terms = () => {
  return (
    <div className="min-h-screen bg-deep-black">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-section font-bold text-clean-white tracking-[0.2em] uppercase mb-4">
              TERMS OF SERVICE
            </h1>
            <div className="w-24 h-px bg-strategic-blue mx-auto"></div>
          </div>

          {/* Content */}
          <div className="isometric-card--subtle bg-dimensional-gray border border-depth-gray/30 p-8 space-y-8">
            
            <section>
              <h2 className="text-xl font-bold text-clean-white tracking-wider mb-4 uppercase">
                1. ACCEPTANCE OF TERMS
              </h2>
              <p className="text-depth-gray leading-relaxed">
                By accessing and using Credit Markets protocol and platform, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-clean-white tracking-wider mb-4 uppercase">
                2. INSTITUTIONAL ACCESS
              </h2>
              <p className="text-depth-gray leading-relaxed mb-4">
                Credit Markets is designed exclusively for institutional investors and qualified participants. Access requires:
              </p>
              <ul className="text-depth-gray space-y-2 ml-6">
                <li className="font-mono text-sm">• Minimum investment threshold of $100,000 USD</li>
                <li className="font-mono text-sm">• Completion of institutional KYC verification</li>
                <li className="font-mono text-sm">• Compliance with applicable regulatory requirements</li>
                <li className="font-mono text-sm">• Accredited investor status where required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-clean-white tracking-wider mb-4 uppercase">
                3. RISK DISCLOSURE
              </h2>
              <p className="text-depth-gray leading-relaxed">
                Investment in credit markets involves substantial risk of loss and is suitable only for sophisticated investors. Past performance does not guarantee future results. Credit instruments may be subject to default risk, interest rate risk, and market volatility.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-clean-white tracking-wider mb-4 uppercase">
                4. PLATFORM AVAILABILITY
              </h2>
              <p className="text-depth-gray leading-relaxed">
                While we strive to maintain continuous service, the platform may be subject to maintenance, updates, or technical issues. We do not guarantee uninterrupted access and reserve the right to modify or discontinue services with appropriate notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-clean-white tracking-wider mb-4 uppercase">
                5. INTELLECTUAL PROPERTY
              </h2>
              <p className="text-depth-gray leading-relaxed">
                All content, software, and technology provided through the Credit Markets platform are proprietary and protected by intellectual property laws. Unauthorized reproduction or distribution is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-clean-white tracking-wider mb-4 uppercase">
                6. LIMITATION OF LIABILITY
              </h2>
              <p className="text-depth-gray leading-relaxed">
                Credit Markets and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our platform or services, even if we have been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-clean-white tracking-wider mb-4 uppercase">
                7. GOVERNING LAW
              </h2>
              <p className="text-depth-gray leading-relaxed">
                These Terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration in accordance with established financial industry practices.
              </p>
            </section>

            <div className="pt-8 border-t border-depth-gray/20">
              <p className="text-strategic-blue font-mono text-sm text-center">
                LAST UPDATED: SEPTEMBER 2025 | VERSION 2.1
              </p>
            </div>
          </div>
        </div>
      </main>

      <TerminalFooter />
    </div>
  );
};

export default Terms;