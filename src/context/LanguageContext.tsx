"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language } from "@/lib/types";
import { translations } from "@/lib/translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "fr",
  setLanguage: () => {},
  t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("bgyt_lang") as Language;
    if (saved && (saved === "fr" || saved === "en" || saved === "nl")) {
      setLanguageState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("bgyt_lang", lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string, fallback: string = ""): string => {
    const dict = translations[language] || translations.fr;
    return dict[key] || translations.fr[key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
