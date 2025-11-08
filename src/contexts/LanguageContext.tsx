import {
    createContext,
    useContext,
    useState,
    useEffect,
    ReactNode,
} from "react";
import { loadLanguage } from "../utils/loadLanguage";
import type { LanguageData } from "../utils/loadLanguage";

interface LanguageContextType {
    language: "de" | "en";
    languageData: LanguageData | null;
    setLanguage: (lang: "de" | "en") => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<"de" | "en">("en");
    const [languageData, setLanguageData] = useState<LanguageData | null>(null);

    useEffect(() => {
        loadLanguage().then(setLanguageData);
    }, []);

    useEffect(() => {
        // Update body class for language
        document.body.classList.remove("lang-en", "lang-de");
        document.body.classList.add(`lang-${language}`);
    }, [language]);

    return (
        <LanguageContext.Provider
            value={{ language, languageData, setLanguage }}
        >
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
