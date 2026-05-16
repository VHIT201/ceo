"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from "react";
import { Locale, Dictionary } from "./types";
import { en } from "./dictionaries/en";
import { vi } from "./dictionaries/vi";

const dictionaries: Record<Locale, Dictionary> = { en, vi };

interface I18nContextType {
  locale: Locale;
  dict: Dictionary;
  toggleLocale: () => void;
}

const I18nContext = createContext<I18nContextType>({
  locale: "en",
  dict: en,
  toggleLocale: () => {},
});

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "en" ? "vi" : "en"));
  }, []);

  const dict = dictionaries[locale];

  return (
    <I18nContext.Provider value={{ locale, dict, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
