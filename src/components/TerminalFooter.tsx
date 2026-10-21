import { memo } from "react";
import { Link } from "react-router-dom";
import slashNavy from "@/assets/cm-slash-navy.png";
import { CONTACT_EMAIL, CONTACT_MAILTO } from "@/lib/constants";
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
        </div>
      </div>
    </footer>
  );
});

TerminalFooter.displayName = "TerminalFooter";

export default TerminalFooter;
