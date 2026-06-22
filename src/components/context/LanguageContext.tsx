"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Language } from "../../lib/data/dictionaries"; 

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Set the default state fallback to English ("en")
  const [language, setLanguage] = useState<Language>("en");

  // Fixed toggle logic to allow clean switching between both languages
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}