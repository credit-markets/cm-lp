import { memo } from "react";
import { Link } from "react-router-dom";
import slashNavy from "@/assets/cm-slash-navy.png";
import { CONTACT_EMAIL, CONTACT_MAILTO, LINKEDIN_URL, X_URL } from "@/lib/constants";

// Brand marks drawn inline (lucide has no X logo); both use currentColor.
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor" aria-hidden="true">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
    <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23 5.46-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
  </svg>
);
import { cm } from "@/lib/cm";
import { useLang } from "@/i18n/useLang";

const TerminalFooter = memo(() => {
  const { t } = useLang();
  return (
    <footer className="bg-cm-bg border-t border-cm-border">
      <div className={`${cm.container} py-10 flex flex-col md:flex-row md:items-center justify-between gap-6`}>
        <img src={slashNavy} alt="Credit Markets" className="h-4 w-auto self-start md:self-auto" />
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a href={CONTACT_MAILTO} className="cm-num inline-block py-2.5 text-cm-text hover:text-cm-accent transition-colors">
            {CONTACT_EMAIL}
          </a>
          <Link to="/terms" className="inline-block py-2.5 text-cm-text-2 hover:text-cm-text transition-colors">
            {t.footer.terms}
          </Link>
          <Link to="/privacy" className="inline-block py-2.5 text-cm-text-2 hover:text-cm-text transition-colors">
            {t.footer.privacy}
          </Link>
          <span className="flex items-center gap-1 -mx-2.5">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.linkedin}
              className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-cm-text-2 hover:text-cm-accent transition-colors"
            >
              <LinkedInIcon />
            </a>
            <a
              href={X_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t.footer.x}
              className="w-10 h-10 inline-flex items-center justify-center rounded-lg text-cm-text-2 hover:text-cm-accent transition-colors"
            >
              <XIcon />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
});

TerminalFooter.displayName = "TerminalFooter";

export default TerminalFooter;
