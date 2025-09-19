import Navigation from "@/components/Navigation";
import TerminalFooter from "@/components/TerminalFooter";

const Terms = () => {
  return (
    <div className="min-h-screen bg-deep-black">
      <Navigation />
      
      <main className="pt-10 pb-16">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-section font-bold text-clean-white tracking-[0.2em] uppercase mb-4">
              TERMS OF SERVICE
            </h1>
            <div className="w-24 h-px bg-strategic-blue mx-auto mb-4"></div>
            <h2 className="text-xl font-semibold text-strategic-blue tracking-wider uppercase mb-2">
              CREDIT MARKETS PROTOCOL
            </h2>
            <p className="text-depth-gray italic">
              Effective Date: September 2025
            </p>
          </div>

          {/* Content */}
          <div className="isometric-card--subtle bg-dimensional-gray border border-depth-gray/30 p-8 space-y-12">
            
            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                ARTICLE I - DEFINITIONS AND ACCEPTANCE
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  These Terms of Service (hereinafter "Agreement" or "Terms") constitute a legally binding agreement between Credit Markets Holdings Ltd., its subsidiaries, affiliates, and related entities (collectively, "Credit Markets," "Company," "we," "us," or "our"), and the institutional entity accessing or using the Credit Markets protocol, platform, and associated services (hereinafter "User," "you," or "your"). By accessing, browsing, or utilizing any aspect of the Credit Markets protocol or platform, you acknowledge that you have read, understood, and agree to be bound by these Terms in their entirety, including all documents incorporated herein by reference.
                </p>
                <p>
                  The Credit Markets protocol operates as a hybrid financial infrastructure combining decentralized finance mechanisms with regulated financial intermediation services. This Agreement governs your access to and use of both the permissionless protocol layer operating on various blockchain networks and the regulated financial services provided through our licensed entities. Your continued use of the platform following the posting of any modifications to these Terms constitutes your acceptance of such modifications.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                ARTICLE II - ELIGIBILITY AND ACCESS RESTRICTIONS
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  The Credit Markets platform is exclusively designed for and restricted to institutional investors, qualified purchasers, accredited investors, and other sophisticated market participants as defined under applicable securities laws and regulations. Access to and use of the platform is strictly prohibited for retail investors, natural persons acting in their individual capacity (except where such persons are authorized representatives of eligible institutional entities), and any persons or entities located in jurisdictions where the offering of our services would violate local laws or regulations.
                </p>
                <p>
                  To establish and maintain access to the platform, you must satisfy and continue to satisfy the following eligibility criteria:
                </p>
                <ul className="text-depth-gray space-y-2 ml-6">
                  <li className="font-mono text-sm">• (a) you must be a duly organized and validly existing legal entity under the laws of your jurisdiction of incorporation</li>
                  <li className="font-mono text-sm">• (b) you must qualify as an institutional investor, qualified purchaser, or accredited investor under applicable securities laws</li>
                  <li className="font-mono text-sm">• (c) you must maintain a minimum investment capacity of one hundred thousand United States Dollars ($100,000 USD) per transaction</li>
                  <li className="font-mono text-sm">• (d) you must successfully complete our institutional know-your-customer and anti-money laundering verification procedures</li>
                  <li className="font-mono text-sm">• (e) you must not be subject to any sanctions administered or enforced by any governmental authority</li>
                  <li className="font-mono text-sm">• (f) you must have the legal capacity, authority, and right to enter into this Agreement and to perform all obligations hereunder</li>
                </ul>
                <p>
                  You hereby represent and warrant that you meet all eligibility requirements set forth herein and that all information provided to us in connection with your registration and use of the platform is true, accurate, current, and complete. You further covenant to promptly notify us of any change in circumstances that would render any of your representations or warranties incorrect or misleading. We reserve the right, in our sole discretion, to refuse access to the platform, terminate accounts, or suspend services to any party at any time and for any reason, including but not limited to violation of these Terms or failure to meet eligibility requirements.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                ARTICLE III - KNOW YOUR CUSTOMER AND COMPLIANCE PROCEDURES
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  Prior to accessing the Credit Markets platform and as a continuing condition of use, you agree to undergo and cooperate fully with our comprehensive institutional verification procedures. Such procedures shall include, but not be limited to, the provision of certified corporate documents evidencing your legal existence and good standing, detailed beneficial ownership information including the identification of all natural persons holding a direct or indirect ownership interest of twenty-five percent (25%) or greater, documentation establishing the source and legitimacy of funds to be deployed through the platform, evidence of regulatory licenses and registrations as applicable to your operations, and such other documentation and information as we may reasonably request to satisfy our legal and regulatory obligations.
                </p>
                <p>
                  You acknowledge and agree that we are required to implement and maintain anti-money laundering and counter-terrorist financing programs pursuant to applicable laws and regulations, including but not limited to the Bank Secrecy Act, the USA PATRIOT Act, and similar legislation in other jurisdictions. In furtherance of these obligations, you consent to our conducting initial and ongoing screening of your organization, beneficial owners, and authorized representatives against sanctions lists maintained by the Office of Foreign Assets Control, the United Nations, the European Union, and other relevant authorities. You further agree to promptly provide any additional information or documentation requested in connection with our transaction monitoring and suspicious activity reporting obligations.
                </p>
                <p>
                  The collection, verification, and maintenance of customer due diligence information is fundamental to the integrity of the Credit Markets platform and the broader financial system. Accordingly, you covenant to maintain the accuracy and currency of all information provided to us, to notify us immediately of any material changes to such information, and to cooperate fully with any periodic reviews or enhanced due diligence procedures we may implement. Failure to provide requested information or documentation, or the provision of false, misleading, or incomplete information, shall constitute a material breach of this Agreement and may result in the immediate suspension or termination of your access to the platform.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                ARTICLE IV - DESCRIPTION OF SERVICES AND PLATFORM FUNCTIONALITY
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  Credit Markets operates a sophisticated financial technology platform that facilitates the origination, structuring, and distribution of emerging market credit opportunities to institutional investors globally. The platform leverages blockchain technology and smart contract infrastructure to create efficient, transparent, and programmable credit markets while maintaining compliance with applicable regulatory frameworks. Our services encompass both on-chain protocol functionality and off-chain financial intermediation, creating a seamless bridge between traditional finance and decentralized finance ecosystems.
                </p>
                <p>
                  Through the Credit Markets protocol, eligible users may access tokenized credit pools representing diversified exposure to emerging market receivables and other credit instruments, deploy capital through smart contracts that automatically execute according to predetermined parameters, participate in protocol governance through decentralized decision-making mechanisms, earn yields generated from the underlying credit portfolios, and benefit from automated risk management and hedging strategies embedded within the protocol architecture. The protocol operates on a permissionless basis, meaning that once deployed, smart contracts execute autonomously according to their coded logic without requiring manual intervention or centralized control.
                </p>
                <p>
                  In addition to the decentralized protocol layer, Credit Markets provides regulated financial services through licensed entities in applicable jurisdictions. These services include foreign exchange hedging to mitigate currency risk inherent in emerging market investments, collateral management and custody services ensuring the security and proper administration of assets, credit facilitation and origination services connecting institutional investors with vetted credit opportunities, cross-border payment rails leveraging stablecoin infrastructure for efficient capital movement, and comprehensive reporting and compliance services tailored to institutional requirements. The integration of these regulated services with the decentralized protocol creates a unique hybrid model that combines the efficiency and transparency of blockchain technology with the security and compliance of traditional financial infrastructure.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                ARTICLE V - RISK FACTORS AND INVESTMENT CONSIDERATIONS
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                  <p className="text-red-300 font-semibold uppercase tracking-wider text-sm mb-2">
                    IMPORTANT RISK DISCLOSURE
                  </p>
                  <p className="text-red-200">
                    INVESTING IN CREDIT INSTRUMENTS THROUGH THE CREDIT MARKETS PLATFORM INVOLVES SUBSTANTIAL RISKS THAT MAY RESULT IN THE PARTIAL OR TOTAL LOSS OF YOUR INVESTED CAPITAL. THE FOLLOWING RISK DISCLOSURE IS NOT EXHAUSTIVE AND SHOULD BE CAREFULLY CONSIDERED IN CONJUNCTION WITH YOUR OWN INDEPENDENT ANALYSIS AND PROFESSIONAL ADVICE.
                  </p>
                </div>
                <p>
                  Credit risk represents the primary investment risk associated with the platform, as borrowers may default on their obligations, resulting in losses to investors. The credit instruments available through the platform are primarily originated in emerging markets where credit assessment methodologies may be less developed, historical performance data may be limited, and recovery procedures in the event of default may be uncertain or ineffective. While Credit Markets implements risk management procedures and requires collateralization for certain credit products, there can be no assurance that such measures will prevent losses or that collateral will be sufficient to cover outstanding obligations.
                </p>
                <p>
                  Currency risk is inherent in cross-border credit investments, particularly in emerging markets where exchange rate volatility can be substantial. Depreciation of local currencies against the investment currency can significantly erode returns even where underlying credit performance remains satisfactory. While hedging instruments may be available through the platform, such hedging strategies involve costs that reduce overall returns and may not fully eliminate currency exposure. Political and economic instability in emerging markets can lead to capital controls, currency devaluations, or other governmental actions that adversely affect the value and transferability of investments.
                </p>
                <p>
                  Technology and operational risks associated with blockchain infrastructure and smart contracts represent novel challenges that traditional financial markets do not face. Smart contracts, once deployed, operate according to their programmed logic and cannot be easily modified or reversed, potentially leading to unintended consequences if coding errors or vulnerabilities are present. The platform relies on various blockchain networks, oracle systems, and bridging technologies that may experience outages, attacks, or failures that could result in the loss or inaccessibility of assets. Gas fees and network congestion on blockchain networks can make transactions expensive or impossible to execute at critical times.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                ARTICLE VI - FEES, COSTS, AND PAYMENT TERMS
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  The use of Credit Markets platform and services is subject to various fees and charges that shall be disclosed to you prior to the execution of any transaction. Platform fees, ranging from fifty basis points to two hundred basis points (0.5% to 2.0%) of transaction value, are assessed on investment and redemption activities to cover the costs of platform operation, maintenance, and development. Facilitation fees, determined based on the specific characteristics of each credit opportunity including jurisdiction, duration, and risk profile, compensate Credit Markets for origination, structuring, and ongoing administration services. Performance fees may be charged on certain enhanced yield products or actively managed strategies, calculated as a percentage of returns exceeding predetermined hurdle rates.
                </p>
                <p>
                  In addition to fees paid directly to Credit Markets, you shall be responsible for all third-party costs associated with your use of the platform, including but not limited to blockchain network transaction fees (commonly referred to as "gas fees"), which vary based on network congestion and transaction complexity; foreign exchange conversion costs when investing in assets denominated in currencies other than your base currency; hedging costs associated with currency risk mitigation strategies; custody and administration fees charged by qualified custodians or fund administrators; and any taxes, duties, or governmental charges imposed on your transactions or investment returns.
                </p>
                <p>
                  All fees shall be deducted automatically from transaction proceeds or charged to your designated account according to the fee schedule in effect at the time of the transaction. We reserve the right to modify our fee structure upon thirty (30) days' prior written notice to users, provided that such modifications shall not apply to transactions initiated prior to the effective date of the fee change. You acknowledge that fees constitute an important component of platform economics and that the failure to pay fees when due shall constitute a material breach of this Agreement entitling us to suspend or terminate your access to the platform and pursue all available legal remedies.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                ARTICLE VII - INTELLECTUAL PROPERTY RIGHTS
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  All intellectual property rights in and to the Credit Markets platform, including but not limited to the protocol architecture, smart contract code, user interface designs, algorithms, methodologies, documentation, trademarks, service marks, logos, and any other proprietary materials or information, are and shall remain the exclusive property of Credit Markets or its licensors. Nothing in this Agreement shall be construed as granting you any right, title, or interest in or to any intellectual property rights except for the limited license expressly provided herein.
                </p>
                <p>
                  Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the platform solely for the purpose of evaluating and making investments in accordance with the platform's intended functionality. This license is personal to your organization and may not be assigned, transferred, or shared with any third party without our express written consent. You shall not, and shall not permit any third party to: (a) copy, modify, adapt, translate, or create derivative works based on the platform or any portion thereof; (b) reverse engineer, disassemble, decompile, or otherwise attempt to derive the source code or underlying algorithms of the platform; (c) remove, alter, or obscure any proprietary notices or labels on the platform; (d) use the platform for any unlawful purpose or in violation of any applicable laws or regulations; or (e) access or use the platform in any manner that could damage, disable, overburden, or impair our servers or networks.
                </p>
                <p>
                  You acknowledge that the platform may contain or provide access to third-party content, services, or websites that are not owned or controlled by Credit Markets. We assume no responsibility for such third-party materials and provide access to them only as a convenience to our users. Your use of third-party materials is at your own risk and may be subject to additional terms and conditions imposed by such third parties.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                ARTICLE VIII - REPRESENTATIONS, WARRANTIES, AND COVENANTS
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  You hereby represent, warrant, and covenant to Credit Markets that: (a) you have full legal capacity, power, and authority to enter into this Agreement and to perform your obligations hereunder; (b) the execution, delivery, and performance of this Agreement has been duly authorized by all necessary corporate or organizational action on your part; (c) this Agreement constitutes a legal, valid, and binding obligation enforceable against you in accordance with its terms; (d) your use of the platform will not violate any applicable law, regulation, or contractual obligation by which you are bound; (e) all information provided to us in connection with your use of the platform is and shall remain true, accurate, current, and complete; (f) you are acquiring interests in credit instruments for investment purposes and not with a view toward distribution or resale; (g) you have sufficient knowledge and experience in financial and business matters to evaluate the risks and merits of investing through the platform; (h) you have conducted your own independent investigation and analysis of the investments available through the platform and have not relied upon any representations or warranties by Credit Markets other than those expressly set forth in this Agreement; (i) you understand that investments through the platform are speculative and involve a high degree of risk; and (j) you can bear the economic risk of losing your entire investment.
                </p>
                <p>
                  You further represent and warrant that all funds used in connection with the platform are derived from legitimate sources and do not constitute the proceeds of any illegal activity, that you are not acting on behalf of any undisclosed principal or beneficial owner, that neither you nor any of your beneficial owners, directors, officers, or authorized representatives are subject to any sanctions or appear on any prohibited party lists maintained by governmental authorities, and that you will comply with all applicable laws and regulations in connection with your use of the platform, including without limitation securities laws, tax laws, and anti-money laundering regulations.
                </p>
                <p>
                  These representations, warranties, and covenants shall survive the termination of this Agreement and your cessation of platform use. You agree to indemnify and hold harmless Credit Markets from any losses, damages, or liabilities arising from the breach or inaccuracy of any representation, warranty, or covenant made herein.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                ARTICLE IX - LIMITATION OF LIABILITY AND INDEMNIFICATION
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <div className="bg-yellow-900/20 border border-yellow-500/30 p-4 rounded-lg">
                  <p className="text-yellow-300 font-semibold uppercase tracking-wider text-sm mb-2">
                    LIMITATION OF LIABILITY
                  </p>
                  <p className="text-yellow-200">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CREDIT MARKETS, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR LICENSORS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR LOSS OF PROFITS, REVENUE, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE PLATFORM, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THIS AGREEMENT SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU TO CREDIT MARKETS IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO LIABILITY.
                  </p>
                </div>
                <p>
                  You acknowledge and agree that Credit Markets provides a technology platform for credit investment and does not guarantee any investment returns, ensure the performance of any credit instruments, provide investment advice or recommendations, guarantee the solvency or performance of any borrower or counterparty, or warrant the continuous, uninterrupted, or error-free operation of the platform. The limitations of liability set forth in this section reflect the allocation of risk between the parties and form an essential basis of the bargain between the parties.
                </p>
                <p>
                  You agree to indemnify, defend, and hold harmless Credit Markets, its affiliates, and their respective directors, officers, employees, agents, and representatives from and against any and all claims, demands, actions, losses, costs, damages, liabilities, and expenses (including reasonable attorneys' fees and costs) arising out of or relating to: (a) your breach of this Agreement; (b) your violation of any applicable law or regulation; (c) your negligence or willful misconduct; (d) your investment decisions and activities on the platform; (e) any misrepresentation or omission made by you; or (f) any dispute between you and any third party relating to your use of the platform.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                ARTICLE X - DISPUTE RESOLUTION AND ARBITRATION
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  Any dispute, controversy, or claim arising out of or relating to this Agreement, including its formation, interpretation, breach, termination, or the arbitrability of any dispute, shall be resolved exclusively through binding arbitration administered by a recognized international arbitration institution under its commercial arbitration rules. The arbitration shall be conducted by a panel of three arbitrators, with each party selecting one arbitrator and the two party-appointed arbitrators selecting the third, who shall serve as the presiding arbitrator. The seat of arbitration shall be [Jurisdiction], and the arbitration shall be conducted in the English language.
                </p>
                <p>
                  The arbitrators shall have the authority to grant any remedy or relief that a court of competent jurisdiction could grant, including injunctive relief, specific performance, and recovery of costs and fees as provided in this Agreement. The arbitral award shall be final and binding upon the parties and may be enforced in any court of competent jurisdiction. Each party shall bear its own costs and attorneys' fees in connection with the arbitration, except that the arbitrators may award costs and fees to the prevailing party if permitted under applicable law.
                </p>
                <p>
                  Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to prevent irreparable harm or preserve the status quo pending arbitration. You hereby waive any right to participate in any class action, collective action, or representative proceeding against Credit Markets, whether in court or in arbitration. This waiver of class action rights is an essential term of this Agreement, and if found to be unenforceable, the entire arbitration provision shall be null and void.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                ARTICLE XI - TERM AND TERMINATION
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  This Agreement shall commence upon your first access to or use of the Credit Markets platform and shall continue until terminated in accordance with this section. Either party may terminate this Agreement at any time upon thirty (30) days' written notice to the other party. Additionally, we may terminate this Agreement immediately upon written notice if: (a) you breach any provision of this Agreement; (b) you become subject to bankruptcy, insolvency, or similar proceedings; (c) we are required to do so by applicable law or regulatory directive; or (d) we determine, in our sole discretion, that continued provision of services to you poses a legal, regulatory, or reputational risk to Credit Markets.
                </p>
                <p>
                  Upon termination of this Agreement, your right to access and use the platform shall immediately cease, and you shall promptly settle all outstanding obligations and positions. Termination shall not affect any rights or obligations that have accrued prior to termination, nor shall it relieve you of any obligations that by their nature are intended to survive termination, including but not limited to provisions relating to intellectual property, confidentiality, limitation of liability, indemnification, and dispute resolution.
                </p>
                <p>
                  We reserve the right to suspend your access to the platform pending investigation of any suspected violation of this Agreement or applicable law. During any suspension period, you shall remain liable for all obligations incurred prior to suspension and shall not be entitled to any refund of fees paid.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-clean-white tracking-wider mb-6 uppercase">
                ARTICLE XII - GOVERNING LAW AND MISCELLANEOUS PROVISIONS
              </h2>
              <div className="text-depth-gray leading-relaxed space-y-4">
                <p>
                  This Agreement and all matters arising out of or relating to this Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of laws principles that would require the application of the laws of another jurisdiction. Subject to the arbitration provisions set forth above, the courts of [Jurisdiction] shall have exclusive jurisdiction over any dispute that is not subject to arbitration.
                </p>
                <p>
                  This Agreement, together with any documents incorporated herein by reference, constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior and contemporaneous agreements, understandings, negotiations, and discussions, whether oral or written. No amendment, modification, or waiver of any provision of this Agreement shall be effective unless in writing and signed by both parties. The failure of either party to enforce any provision of this Agreement shall not constitute a waiver of that provision or any other provision.
                </p>
                <p>
                  If any provision of this Agreement is held to be invalid, illegal, or unenforceable, the remaining provisions shall continue in full force and effect, and the invalid, illegal, or unenforceable provision shall be deemed modified to the minimum extent necessary to make it valid, legal, and enforceable. The section headings in this Agreement are for convenience only and shall not be used to interpret or construe any provision hereof. This Agreement may be executed in counterparts, each of which shall be deemed an original and all of which together shall constitute one and the same instrument.
                </p>
              </div>
            </section>

            <div className="pt-8 border-t border-depth-gray/20">
              <div className="bg-strategic-blue/10 border border-strategic-blue/30 p-6 rounded-lg">
                <p className="text-strategic-blue font-bold text-center text-lg mb-4 uppercase tracking-wider">
                  BY ACCESSING OR USING THE CREDIT MARKETS PLATFORM, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE IN THEIR ENTIRETY.
                </p>
                <div className="text-center space-y-2">
                  <p className="text-strategic-blue font-mono text-sm">
                    For questions regarding these Terms of Service, please contact:
                  </p>
                  <p className="text-strategic-blue font-semibold">
                    Credit Markets Legal Department
                  </p>
                  <p className="text-strategic-blue font-mono text-sm">
                    Email: legal@credit.markets
                  </p>
                  <p className="text-strategic-blue font-mono text-sm">
                    Address: [Corporate Address]
                  </p>
                </div>
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