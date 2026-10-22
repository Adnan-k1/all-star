import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../data/translations";

const STORAGE_KEY = "lang";
const LanguageContext = createContext(null);

function getInitialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "id" || saved === "en") return saved;
  } catch {
    /* localStorage bisa diblokir, abaikan */
  }
  
  return navigator.language?.toLowerCase().startsWith("id") ? "id" : "en";
}

function lookup(obj, path) {
  return path.split(".").reduce((acc, key) => (acc == null ? undefined : acc[key]), obj);
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  const setLang = useCallback((next) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* abaikan */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  
  const t = useCallback(
    (key, fallback) => lookup(translations[lang], key) ?? lookup(translations.en, key) ?? fallback ?? key,
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage harus dipakai di dalam <LanguageProvider>");
  return ctx;
}