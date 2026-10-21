import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import TerminalFooter from "@/components/TerminalFooter";

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms of Service | Credit Markets";
    document.documentElement.lang = "en";
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", "https://credit.markets/terms");
  }, []);

  return (
    <div className="min-h-screen bg-cm-bg">
      <Navigation />

      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-cm-text tracking-[-0.03em] mb-4">
              TERMS OF SERVICE
            </h1>
            <div className="w-24 h-px bg-cm-accent mx-auto mb-4"></div>
            <p className="text-xl font-semibold text-cm-accent tracking-tight mb-2">
              CREDIT MARKETS
            </p>
            <p className="text-cm-text-2 italic">
              Effective Date: May 13, 2026
            </p>
          </div>

          {/* Preliminary banner */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-cm-accent/10 border border-cm-accent/30 p-5 rounded-lg">
              <p className="cm-eyebrow text-cm-accent mb-2">
                Preliminary — Pre-Launch Version
              </p>
              <p className="text-cm-text/80 text-sm leading-relaxed">
                These Terms apply during our pre-launch waitlist phase. A complete version will be published before any investment products are offered through the Site.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="bg-cm-surface rounded-lg shadow-card p-8 space-y-12">

            <section>
              <h2 className="text-2xl font-bold text-cm-text tracking-tight mb-6">
                1. About the Site
              </h2>
              <div className="text-cm-text-2 leading-relaxed space-y-4">
                <p>
                  The site at credit.markets (the "Site") is operated by Credit Markets ("we", "us"). The Site is informational. It allows you to learn about our planned credit-infrastructure products and to join a waitlist.
                </p>
                <p>
                  As of the Effective Date, no investment products are offered through the Site, no securities are being sold, and no investment advice is being provided.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cm-text tracking-tight mb-6">
                2. No Offer of Securities
              </h2>
              <div className="text-cm-text-2 leading-relaxed space-y-4">
                <p>
                  Nothing on the Site constitutes an offer to sell, or a solicitation of an offer to buy, any security or financial instrument in any jurisdiction. When investment products become available, they will be offered only through separate offering documents, only to eligible investors, and only in jurisdictions where the offering is permitted under applicable law.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cm-text tracking-tight mb-6">
                3. Waitlist
              </h2>
              <div className="text-cm-text-2 leading-relaxed space-y-4">
                <p>
                  To join the waitlist, you must (a) be at least 18 years of age, (b) not be a resident of, or accessing the Site from, any jurisdiction subject to comprehensive international sanctions, and (c) provide accurate information. Joining the waitlist is not an offer, allocation, or guarantee of access to any future product.
                </p>
                <p>
                  If and when investment products are launched, additional eligibility requirements will apply, including investor-qualification verification and completion of know-your-business and anti-money-laundering procedures. Waitlist registration does not satisfy these future requirements.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cm-text tracking-tight mb-6">
                4. Acceptable Use
              </h2>
              <div className="text-cm-text-2 leading-relaxed space-y-4">
                <p>
                  You agree not to use the Site to violate any law, attempt to access non-public portions of the Site, interfere with the Site's operation, scrape or harvest data without our consent, or impersonate any person.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cm-text tracking-tight mb-6">
                5. Intellectual Property
              </h2>
              <div className="text-cm-text-2 leading-relaxed space-y-4">
                <p>
                  All content on the Site is owned by Credit Markets or its licensors. You may not copy, modify, distribute, or create derivative works from Site content without our prior written consent, except for personal, non-commercial review.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cm-text tracking-tight mb-6">
                6. As-Is; Limitation of Liability
              </h2>
              <div className="text-cm-text-2 leading-relaxed space-y-4">
                <div className="bg-cm-accent/10 border border-cm-accent/30 p-4 rounded-lg">
                  <p className="text-cm-text/90 text-sm leading-relaxed">
                    THE SITE IS PROVIDED "AS IS" AND "AS AVAILABLE", WITHOUT WARRANTY OF ANY KIND. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO YOUR USE OF THE SITE IS LIMITED TO ONE HUNDRED U.S. DOLLARS (US$100). WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cm-text tracking-tight mb-6">
                7. Privacy
              </h2>
              <div className="text-cm-text-2 leading-relaxed space-y-4">
                <p>
                  Your use of the Site is also governed by our{" "}
                  <Link
                    to="/privacy"
                    className="text-cm-accent hover:text-cm-accent/80 underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                  , which describes how we collect and use information from waitlist visitors.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cm-text tracking-tight mb-6">
                8. Changes
              </h2>
              <div className="text-cm-text-2 leading-relaxed space-y-4">
                <p>
                  We may update these Terms from time to time. The Effective Date above will reflect the most recent version. Material changes will be communicated to waitlist registrants by email where appropriate.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cm-text tracking-tight mb-6">
                9. Governing Law and Disputes
              </h2>
              <div className="text-cm-text-2 leading-relaxed space-y-4">
                <p>
                  These Terms are governed by the laws of the State of Delaware, United States, without regard to its conflict-of-laws principles. Any dispute arising out of or relating to these Terms or your use of the Site shall be resolved exclusively in the state or federal courts located in the State of Delaware, and you consent to the personal jurisdiction of those courts.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-cm-text tracking-tight mb-6">
                10. Contact
              </h2>
              <div className="text-cm-text-2 leading-relaxed space-y-4">
                <p>
                  Questions about these Terms:{" "}
                  <a
                    href="mailto:contact@credit.markets"
                    className="text-cm-accent hover:text-cm-accent/80 underline underline-offset-2"
                  >
                    contact@credit.markets
                  </a>
                </p>
              </div>
            </section>

            <div className="pt-8 border-t border-cm-border/20">
              <div className="bg-cm-accent/10 border border-cm-accent/30 p-6 rounded-lg">
                <p className="text-cm-accent font-bold text-center text-lg mb-2 uppercase tracking-tight">
                  Preliminary Version
                </p>
                <p className="text-cm-accent/80 text-sm text-center leading-relaxed">
                  A complete Terms of Service will be published before any investment product is offered through the platform.
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

export default Terms;
