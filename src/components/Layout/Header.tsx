import { Link, useLocation } from "wouter";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigation } from "../../contexts/NavigationContext";

export default function Header() {
    const [location] = useLocation();
    const { language, languageData, setLanguage } = useLanguage();
    const { sidebarVisible, setSidebarVisible } = useNavigation();

    // Get page title from location and language
    const getPageTitle = () => {
        if (!languageData) {
            if (location === "/") return "home";
            return location.slice(1);
        }

        const pageKey = location === "/" ? "home" : location.slice(1);
        return languageData.languages[language]?.navigation[pageKey] || pageKey;
    };

    const toggleLanguage = () => {
        const newLang = language === "de" ? "en" : "de";
        setLanguage(newLang);

        // Trigger custom event for NavigationSidebar component
        const event = new CustomEvent("language-change", {
            detail: { language: newLang },
        });
        document.dispatchEvent(event);
    };

    const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
    };

    return (
        <header id="masthead" className="site-header clearfix">
            <div className="header-main container clearfix">
                <div id="logo" className="site-branding clearfix">
                    <p className="site-title">
                        <Link href="/" rel="home">
                            ago
                        </Link>
                    </p>
                    <p className="site-description">
                        new wave/electronica · stuttgart
                    </p>
                </div>
                <h1 id="page-title">{getPageTitle()}</h1>

                <div className="header-right">
                    {/* Language Switcher */}
                    <div className="language-switcher-header">
                        <button
                            onClick={toggleLanguage}
                            className={language === "en" ? "active" : ""}
                        >
                            en
                        </button>
                        <span>/</span>
                        <button
                            onClick={toggleLanguage}
                            className={language === "de" ? "active" : ""}
                        >
                            de
                        </button>
                    </div>

                    {/* Sidebar Navigation Toggle */}
                    <button
                        id="sidebar-navigation-toggle"
                        className={`sidebar-navigation-toggle genericon ${
                            sidebarVisible
                                ? "genericon-close-alt"
                                : "genericon-menu"
                        }`}
                        onClick={toggleSidebar}
                        aria-label="Toggle navigation"
                        aria-controls="sidebar-navigation"
                        aria-haspopup="true"
                        aria-expanded={sidebarVisible}
                        aria-pressed={sidebarVisible}
                    />
                </div>
            </div>
            <div className="header-border-bottom" />
        </header>
    );
}
