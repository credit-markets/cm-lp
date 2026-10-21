import { useEffect, type ReactNode } from "react";
import { content, LANG_HOME, type Lang } from "./content";
import { LangContext } from "./useLang";

export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const t = content[lang];

  // Keep <html lang>, the title and the description in step with the page language.
  useEffect(() => {
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute("content", t.meta.description);
  }, [t]);

  return <LangContext.Provider value={{ lang, t, home: LANG_HOME[lang] }}>{children}</LangContext.Provider>;
}
