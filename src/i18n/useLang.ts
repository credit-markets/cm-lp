import { createContext, useContext } from "react";
import { content, type Copy, type Lang } from "./content";

export interface LangValue {
  lang: Lang;
  t: Copy;
  // Path of the landing page in this language ("/" or "/pt")
  home: string;
}

export const LangContext = createContext<LangValue>({ lang: "en", t: content.en, home: "/" });

export const useLang = () => useContext(LangContext);
