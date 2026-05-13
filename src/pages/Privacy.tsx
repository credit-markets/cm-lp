import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import TerminalFooter from "@/components/TerminalFooter";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy — Credit Markets";
  }, []);

  return (
    <div className="min-h-screen bg-deep-black">
      <Navigation />

      <main className="pt-16 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-section font-bold text-clean-white tracking-[0.2em] uppercase mb-4">
              PRIVACY POLICY
            </h1>
            <div className="w-24 h-px bg-strategic-blue mx-auto mb-4"></div>
            <p className="text-xl font-semibold text-strategic-blue tracking-wider uppercase mb-2">
              CREDIT MARKETS
            </p>
            <p className="text-depth-gray italic">
              Effective Date: May 13, 2026
            </p>
          </div>

          {/* Preliminary banner */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-strategic-blue/10 border border-strategic-blue/30 p-5 rounded-lg">
              <p className="text-strategic-blue font-mono text-xs tracking-wider uppercase mb-2 font-bold">
                Preliminary — Pre-Launch Version
              </p>
              <p className="text-clean-white/80 text-sm leading-relaxed">
                This Privacy Policy applies during our pre-launch waitlist phase. A complete version reflecting the operational privacy practices of the launched platform will be published before any investment products are offered.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="isometric-card--subtle bg-dimensional-gray border border-depth-gray/30 p-8 space-y-12">

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                1. Who We Are
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  The site at credit.markets (the "Site") is operated by Credit Markets ("we", "us"). For privacy inquiries, write to{" "}
                  <a
                    href="mailto:privacy@credit.markets"
                    className="text-strategic-blue hover:text-strategic-blue/80 underline underline-offset-2"
                  >
                    privacy@credit.markets
                  </a>
                  .
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                2. What We Collect
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  During the waitlist phase, we collect only the following:
                </p>
                <ul className="ml-6 space-y-2 list-disc marker:text-strategic-blue/60">
                  <li>
                    Information you provide via the Request Access form: email address, optional Telegram handle, optional indicative investment size, and your investor-type selection.
                  </li>
                  <li>
                    Analytics data, only if you give consent through the cookie banner. If you decline, analytics tools do not collect information about you.
                  </li>
                </ul>
                <p>
                  We do not collect identity, financial-account, tax, or know-your-customer information through the Site during this phase. Such information will be collected only through a separate, gated onboarding process when investment products are offered, governed by a separate privacy notice.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                3. How We Use Your Information
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  We use your information to contact you about the waitlist and product launch, respond to your inquiries, and (with your consent) understand site usage in aggregate. We do not sell your information. We do not share it with third parties for their advertising or marketing.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                4. Service Providers
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  We use third-party service providers to host the Site, store waitlist data, send communications, and (with your consent) analyze site usage. These providers process your information only as needed to provide their services to us. Your data may be processed outside your country of residence, including in the United States.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                5. Retention
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  We retain your waitlist record until you ask us to delete it or until you unsubscribe from communications. Analytics data is retained in accordance with our providers' standard retention periods.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                6. Your Choices
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  At any time you may write to{" "}
                  <a
                    href="mailto:privacy@credit.markets"
                    className="text-strategic-blue hover:text-strategic-blue/80 underline underline-offset-2"
                  >
                    privacy@credit.markets
                  </a>{" "}
                  to:
                </p>
                <ul className="ml-6 space-y-2 list-disc marker:text-strategic-blue/60">
                  <li>Delete your waitlist record</li>
                  <li>Request a copy of the information we hold about you</li>
                  <li>Ask questions about this Policy</li>
                </ul>
                <p>
                  You may withdraw analytics consent at any time via the cookie banner. We aim to respond within thirty (30) days and may ask you to verify your identity before fulfilling a request.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                7. Cookies
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  The Site uses a small number of cookies and local-storage entries: one to remember your cookie-banner choice, and optional analytics cookies that load only after you give consent.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                8. Security
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  We use industry-standard administrative and technical measures to protect your information. No system is perfectly secure; if a breach occurs that is required by applicable law to be disclosed, we will do so.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                9. Children
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  The Site is not directed to anyone under 18, and we do not knowingly collect information from anyone under 18.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                10. Changes to This Policy
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  We may update this Policy from time to time. The Effective Date above will reflect the most recent version. Material changes will be communicated to waitlist registrants by email where appropriate.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                11. Contact
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  Privacy questions:{" "}
                  <a
                    href="mailto:privacy@credit.markets"
                    className="text-strategic-blue hover:text-strategic-blue/80 underline underline-offset-2"
                  >
                    privacy@credit.markets
                  </a>
                </p>
                <p>
                  Your use of the Site is also governed by our{" "}
                  <Link
                    to="/terms"
                    className="text-strategic-blue hover:text-strategic-blue/80 underline underline-offset-2"
                  >
                    Terms of Service
                  </Link>
                  .
                </p>
              </div>
            </section>

            <div className="pt-8 border-t border-depth-gray/20">
              <div className="bg-strategic-blue/10 border border-strategic-blue/30 p-6 rounded-lg">
                <p className="text-strategic-blue font-bold text-center text-lg mb-2 uppercase tracking-wider">
                  Preliminary Version
                </p>
                <p className="text-strategic-blue/80 text-sm text-center leading-relaxed">
                  A complete Privacy Policy will be published before any investment product is offered through the platform, and will include additional disclosures required by applicable privacy and data-protection laws.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <TerminalFooter />
    </div>
  );
};

export default Privacy;
