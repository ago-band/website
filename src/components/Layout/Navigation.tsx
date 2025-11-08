import { Link, useLocation } from "wouter";
import { useState, useEffect, useRef } from "react";
import { loadRoutes } from "../../utils/loadRoutes";
import { useLanguage } from "../../contexts/LanguageContext";
import { useNavigation } from "../../contexts/NavigationContext";
import type { Route } from "../../utils/loadRoutes";

export default function Navigation() {
    const { sidebarVisible, setSidebarVisible, isAnimating, setIsAnimating } =
        useNavigation();
    const contentRef = useRef<HTMLElement | null>(null);
    const tsStartRef = useRef<number>(0);

    useEffect(() => {
        // Get content area reference
        const contentArea = document.querySelector(
            ".content-area"
        ) as HTMLElement;
        contentRef.current = contentArea;
    }, []);

    useEffect(() => {
        // Update body class for sidebar visibility
        if (sidebarVisible) {
            document.body.classList.add("sidebar-visible");
        } else {
            document.body.classList.remove("sidebar-visible");
        }
    }, [sidebarVisible]);

    const showMenu = () => {
        if (isAnimating) return;

        tsStartRef.current = Date.now();
        setIsAnimating(true);

        const menu = document.getElementById(
            "sidebar-navigation"
        ) as HTMLElement;
        const content = contentRef.current;

        if (menu && content) {
            // Position on-screen first (but still invisible)
            menu.style.right = "0";
            menu.style.zIndex = "950";
            document.body.classList.add("sidebar-visible");

            // Add is-visible class after a brief delay to trigger opacity/transform transition
            setTimeout(() => {
                menu.classList.add("is-visible");

                // Wait for transition to end (transition duration is 0.4s = 400ms)
                setTimeout(() => {
                    if (content) {
                        content.style.height = "600px";
                        content.style.overflow = "auto";
                    }
                    setIsAnimating(false);
                }, 450); // Slightly longer than the 400ms transition duration
            }, 10);
        }
    };

    const hideMenu = () => {
        const tsEnd = Date.now();
        const timeDiff = (tsEnd - tsStartRef.current) / 1000;

        if (isAnimating && timeDiff < 0.6) return;

        const menu = document.getElementById(
            "sidebar-navigation"
        ) as HTMLElement;
        const content = contentRef.current;

        if (menu && content) {
            // Reset content styles
            content.style.height = "auto";
            content.style.overflow = "visible";

            document.body.classList.remove("sidebar-visible");
            menu.classList.remove("is-visible");

            // Wait for opacity transition to end before moving off-screen
            // const handleTransitionEnd = (event: TransitionEvent) => {
            //     // Only handle opacity transition, ignore transform transitions
            //     if (event.propertyName === "opacity") {
            menu.style.right = "-9999px";
            menu.style.zIndex = "-1";
            content.style.height = "auto";
            content.style.overflow = "visible";
            setIsAnimating(false);
            //         menu.removeEventListener(
            //             "transitionend",
            //             handleTransitionEnd
            //         );
            //     }
            // };
            // menu.addEventListener("transitionend", handleTransitionEnd, {
            //     once: true,
            // });
        }
    };

    useEffect(() => {
        // Ensure sidebar is positioned off-screen on mount
        const menu = document.getElementById(
            "sidebar-navigation"
        ) as HTMLElement;
        if (menu) {
            menu.style.right = "-9999px";
            menu.style.right = "";
            menu.style.zIndex = "-1";
            menu.classList.remove("is-visible");
        }
    }, []);

    useEffect(() => {
        // Handle sidebar visibility changes from context
        if (sidebarVisible) {
            showMenu();
        } else {
            hideMenu();
        }
    }, [sidebarVisible]);

    useEffect(() => {
        // Handle Escape key
        const handleKeyUp = (event: KeyboardEvent) => {
            if (event.key === "Escape" && sidebarVisible) {
                setSidebarVisible(false);
            }
        };

        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, [sidebarVisible, setSidebarVisible]);

    return null;
}

export function NavigationSidebar() {
    const [location] = useLocation();
    const [routes, setRoutes] = useState<Route[]>([]);
    const { language, languageData } = useLanguage();
    const { sidebarVisible, setSidebarVisible } = useNavigation();
    const menuRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        loadRoutes().then(setRoutes);
    }, []);

    // Hide menu when location changes
    useEffect(() => {
        if (sidebarVisible) {
            setSidebarVisible(false);
        }
    }, [location, setSidebarVisible]);

    // The is-visible class is controlled by the Navigation component's showMenu/hideMenu functions
    // We just need to ensure the class is in sync with the state
    useEffect(() => {
        if (menuRef.current) {
            if (sidebarVisible) {
                menuRef.current.classList.add("is-visible");
            } else {
                menuRef.current.classList.remove("is-visible");
            }
        }
    }, [sidebarVisible]);

    // Filter out /fabi from navigation
    const visibleRoutes = routes.filter((route) => route.path !== "/fabi");

    return (
        <section className="sidebar-navigation-container">
            <nav
                id="sidebar-navigation"
                ref={menuRef}
                className={`sidebar-navigation widget-area clearfix ${
                    sidebarVisible ? "is-visible" : ""
                }`}
                role="complementary"
                aria-labelledby="sidebar-navigation-toggle"
            >
                <aside className="widget widget_nav_menu sidebar-menu-widget clearfix">
                    <nav
                        id="sidebar-menu"
                        className="secondary-navigation navigation menu-navigation-container clearfix"
                        role="navigation"
                    >
                        <ul
                            id="menu-main"
                            className="sidebar-navigation-menu menu"
                        >
                            {visibleRoutes.map((route) => {
                                const routeKey =
                                    route.path === "/"
                                        ? "home"
                                        : route.path.slice(1);
                                const label =
                                    languageData?.languages[language]
                                        .navigation[routeKey] || route.path;
                                const isActive = location === route.path;

                                return (
                                    <li
                                        key={route.path}
                                        id={`menu-item-${route.path}`}
                                        className={`menu-item menu-item-type-custom menu-item-object-custom ${
                                            isActive
                                                ? "current-menu-item current_page_item"
                                                : ""
                                        } ${
                                            route.path === "/"
                                                ? "menu-item-home"
                                                : ""
                                        }`}
                                    >
                                        <Link
                                            href={route.path}
                                            onClick={() => {
                                                setSidebarVisible(false);
                                            }}
                                            aria-current={
                                                isActive ? "page" : undefined
                                            }
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </aside>
            </nav>
        </section>
    );
}
