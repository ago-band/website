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

const LANGUAGE_STORAGE_KEY = "ago-language-preference";

function getInitialLanguage(): "de" | "en" {
    // Check localStorage first
    if (typeof window !== "undefined") {
        const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (saved === "de" || saved === "en") {
            return saved;
        }

        // Infer from browser language preferences
        if (navigator.language) {
            const browserLang = navigator.language.toLowerCase();
            // Check if browser language starts with "de" (e.g., "de", "de-DE", "de-AT", etc.)
            if (browserLang.startsWith("de")) {
                return "de";
            }
        }
    }

    // Default to English
    return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<"de" | "en">(
        getInitialLanguage
    );
    const [languageData, setLanguageData] = useState<LanguageData | null>(null);

    useEffect(() => {
        loadLanguage().then(setLanguageData);
    }, []);

    useEffect(() => {
        // Update body class for language
        document.body.classList.remove("lang-en", "lang-de");
        document.body.classList.add(`lang-${language}`);
    }, [language]);

    const setLanguage = (lang: "de" | "en") => {
        setLanguageState(lang);
        // Save to localStorage
        if (typeof window !== "undefined") {
            localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
        }
    };

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
