import Navigation from "@/components/Navigation";
import TerminalFooter from "@/components/TerminalFooter";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-deep-black">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-section font-bold text-clean-white tracking-[0.2em] uppercase mb-4">
              PRIVACY POLICY
            </h1>
            <div className="w-24 h-px bg-strategic-blue mx-auto"></div>
          </div>

          {/* Content */}
          <div className="isometric-card--subtle bg-dimensional-gray border border-depth-gray/30 p-8 space-y-8">
            
            <section>
              <h2 className="text-xl font-bold text-clean-white tracking-wider mb-4 uppercase">
                1. INFORMATION WE COLLECT
              </h2>
              <p className="text-depth-gray leading-relaxed mb-4">
                Credit Markets collects information necessary to provide institutional-grade financial services:
              </p>
              <ul className="text-depth-gray space-y-2 ml-6">
                <li className="font-mono text-sm">• Identity verification documents and KYC data</li>
                <li className="font-mono text-sm">• Financial qualification and accreditation status</li>
                <li className="font-mono text-sm">• Transaction history and platform usage analytics</li>
                <li className="font-mono text-sm">• Communication records for compliance purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-clean-white tracking-wider mb-4 uppercase">
                2. DATA PROTECTION
              </h2>
              <p className="text-depth-gray leading-relaxed">
                We employ bank-grade encryption and security measures to protect your data. All sensitive information is encrypted in transit and at rest, with access restricted to authorized personnel on a need-to-know basis for legitimate business purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-clean-white tracking-wider mb-4 uppercase">
                3. INFORMATION SHARING
              </h2>
              <p className="text-depth-gray leading-relaxed mb-4">
                We do not sell or rent personal information. Information may be shared only in these circumstances:
              </p>
              <ul className="text-depth-gray space-y-2 ml-6">
                <li className="font-mono text-sm">• Compliance with legal obligations and regulatory requirements</li>
                <li className="font-mono text-sm">• Prevention of fraud and protection of platform security</li>
                <li className="font-mono text-sm">• Service providers bound by confidentiality agreements</li>
                <li className="font-mono text-sm">• Business transfers with equivalent privacy protections</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-clean-white tracking-wider mb-4 uppercase">
                4. REGULATORY COMPLIANCE
              </h2>
              <p className="text-depth-gray leading-relaxed">
                As a financial services platform, we maintain strict compliance with applicable privacy regulations including GDPR, CCPA, and financial privacy laws. We conduct regular audits to ensure ongoing compliance.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-clean-white tracking-wider mb-4 uppercase">
                5. DATA RETENTION
              </h2>
              <p className="text-depth-gray leading-relaxed">
                We retain personal information as required by financial regulations and for legitimate business purposes. Data is securely deleted when no longer required, in accordance with our data retention schedule and applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-clean-white tracking-wider mb-4 uppercase">
                6. YOUR RIGHTS
              </h2>
              <p className="text-depth-gray leading-relaxed mb-4">
                Subject to applicable laws and regulations, you may have rights regarding your personal data:
              </p>
              <ul className="text-depth-gray space-y-2 ml-6">
                <li className="font-mono text-sm">• Access and review your personal information</li>
                <li className="font-mono text-sm">• Request corrections to inaccurate data</li>
                <li className="font-mono text-sm">• Data portability where technically feasible</li>
                <li className="font-mono text-sm">• Withdrawal of consent where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-clean-white tracking-wider mb-4 uppercase">
                7. CONTACT INFORMATION
              </h2>
              <p className="text-depth-gray leading-relaxed">
                For privacy-related inquiries or to exercise your rights, contact our Data Protection Officer at privacy@credit.markets. We will respond to all requests within the timeframes required by applicable law.
              </p>
            </section>

            <div className="pt-8 border-t border-depth-gray/20">
              <p className="text-strategic-blue font-mono text-sm text-center">
                LAST UPDATED: SEPTEMBER 2024 | VERSION 2.1
              </p>
            </div>
          </div>
        </div>
      </main>

      <TerminalFooter />
    </div>
  );
};

export default Privacy;