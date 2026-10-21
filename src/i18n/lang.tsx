import { useEffect, type ReactNode } from "react";
import { content, LANG_HOME, type Lang } from "./content";
import { LangContext } from "./useLang";

const ORIGIN = "https://credit.markets";
const OG_LOCALE: Record<Lang, string> = { en: "en_US", pt: "pt_BR" };

function setAttr(selector: string, attr: string, value: string) {
  document.querySelector(selector)?.setAttribute(attr, value);
}

export function LangProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
  const t = content[lang];

  // index.html ships the English head. On /pt, swap the language, title, description,
  // canonical and preview tags so search engines index it as its own page.
  useEffect(() => {
    const url = `${ORIGIN}${LANG_HOME[lang]}`;
    document.documentElement.lang = t.meta.htmlLang;
    document.title = t.meta.title;
    setAttr('meta[name="description"]', "content", t.meta.description);
    setAttr('link[rel="canonical"]', "href", url);
    setAttr('meta[property="og:url"]', "content", url);
    setAttr('meta[property="og:title"]', "content", t.meta.title);
    setAttr('meta[property="og:description"]', "content", t.meta.description);
    setAttr('meta[property="og:locale"]', "content", OG_LOCALE[lang]);
    setAttr('meta[property="og:locale:alternate"]', "content", OG_LOCALE[lang === "en" ? "pt" : "en"]);
    setAttr('meta[name="twitter:title"]', "content", t.meta.title);
    setAttr('meta[name="twitter:description"]', "content", t.meta.description);
  }, [lang, t]);

  return <LangContext.Provider value={{ lang, t, home: LANG_HOME[lang] }}>{children}</LangContext.Provider>;
}
