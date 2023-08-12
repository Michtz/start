import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

// Importieren Sie Ihre Sprachdateien
import DE from './de/de';
import EN from './en/en';

type LanguageType = typeof DE | typeof EN;

interface LanguageContextType {
  language: LanguageType;
  switchLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  useEffect((): any => {
    if (navigator.language.includes('de')) setLanguage(DE);
    if (navigator.language.includes('en')) setLanguage(EN);
  }, []);
  const [language, setLanguage] = useState<LanguageType>(DE);

  const switchLanguage = (lang: string) => {
    if (lang === 'en') setLanguage(EN);
    else setLanguage(DE);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>{children}</LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
