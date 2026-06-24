import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Lang, t as translate } from "@/i18n/translations";

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: (key: string) => any;
}

const Ctx = createContext<LanguageCtx | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "sr";
    const saved = window.localStorage.getItem("lang") as Lang | null;
    return saved === "en" || saved === "sr" ? saved : "sr";
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
    try {
      window.localStorage.setItem("lang", lang);
    } catch {}
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const toggle = () => setLangState((p) => (p === "sr" ? "en" : "sr"));
  const t = (key: string) => translate(lang, key);

  return <Ctx.Provider value={{ lang, setLang, toggle, t }}>{children}</Ctx.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
