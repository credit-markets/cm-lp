import lockupNavy from "@/assets/cm-lockup-navy.png";
import lockupWhite from "@/assets/cm-lockup-white.png";
import { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cm } from "@/lib/cm";
import { useLang } from "@/i18n/useLang";
import { LANG_HOME } from "@/i18n/content";

const SECTIONS = ["thesis", "protocol", "investors", "originators", "research"] as const;

const Navigation = memo(() => {
  const location = useLocation();
  const { lang, t, home } = useLang();
  const isMainPage = location.pathname === "/" || location.pathname === "/pt";
  const prefix = isMainPage ? "" : home;
  const LINKS = SECTIONS.map((id) => ({ id, label: t.nav.links[id] }));
  const otherHome = LANG_HOME[lang === "en" ? "pt" : "en"];
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Only flips state when crossing the threshold, not on every scroll frame.
  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > 24;
    if (next !== scrolled) setScrolled(next);
  });

  // Close the menu after navigating to a section
  useEffect(() => setOpen(false), [location.hash, location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Over the navy hero the bar is transparent; everywhere else it is the light frosted bar.
  const onNavy = isMainPage && !scrolled && !open;

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-200 ease-cm ${
        onNavy ? "bg-transparent border-transparent" : "bg-[rgba(250,251,255,0.96)] backdrop-blur-md border-cm-border"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-4 focus:z-50 focus:bg-cm-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm"
      >
        {t.nav.skip}
      </a>
      <div className={`${cm.container} h-16 flex items-center justify-between gap-6`}>
        <Link to={home} aria-label={t.nav.home} className="shrink-0">
          <img src={onNavy ? lockupWhite : lockupNavy} alt="Credit Markets" className="h-10 w-auto -ml-2" />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={`${prefix}#${link.id}`}
              className={`text-sm font-medium transition-colors duration-200 ${
                onNavy ? "text-cm-navy-text-2 hover:text-white" : "text-cm-text-2 hover:text-cm-text"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            to={`${otherHome}${location.hash}`}
            aria-label={t.nav.switchLabel}
            hrefLang={lang === "en" ? "pt-BR" : "en"}
            className={`inline-flex items-center justify-center h-10 min-w-10 px-2 rounded-lg text-sm font-medium transition-colors ${
              onNavy ? "text-cm-navy-text-2 hover:text-white" : "text-cm-text-2 hover:text-cm-text"
            }`}
          >
            {t.nav.switchTo}
          </Link>
          <a
            href={`${prefix}#register`}
            className={`${onNavy ? cm.btnPrimaryNavy : cm.btnPrimary} !h-10 !px-4 sm:!px-5 !text-sm`}
          >
            {t.nav.cta}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className={`lg:hidden w-11 h-11 -mr-2 flex items-center justify-center rounded-lg transition-colors ${
              onNavy ? "text-white hover:bg-white/10" : "text-cm-text hover:bg-cm-raised"
            }`}
          >
            {open ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden border-t border-cm-border">
          <ul className={`${cm.container} py-2`}>
            {LINKS.map((link) => (
              <li key={link.id} className="border-b border-cm-border last:border-0">
                <a
                  href={`${prefix}#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="block py-3.5 text-lg font-display font-semibold tracking-[-0.015em]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
});

Navigation.displayName = "Navigation";

export default Navigation;
