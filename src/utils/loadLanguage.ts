import yaml from "js-yaml";

export interface LanguageData {
    languages: {
        en: {
            navigation: Record<string, string>;
            pages: Record<string, { title: string }>;
        };
        de: {
            navigation: Record<string, string>;
            pages: Record<string, { title: string }>;
        };
    };
}

let cachedLanguageData: LanguageData | null = null;

export async function loadLanguage(): Promise<LanguageData> {
    if (cachedLanguageData) {
        return cachedLanguageData;
    }

    try {
        // Try public folder first (for production), then src (for development)
        const baseUrl = import.meta.env.BASE_URL;
        let response = await fetch(`${baseUrl}language.yaml`);
        if (!response.ok) {
            response = await fetch("/src/data/language.yaml");
        }
        if (!response.ok) {
            throw new Error("Failed to load language.yaml");
        }
        const text = await response.text();
        const data = yaml.load(text) as LanguageData;
        cachedLanguageData = data;
        return data;
    } catch (error) {
        console.error("Error loading language:", error);
        // Return default/fallback data
        return {
            languages: {
                en: {
                    navigation: {
                        home: "home",
                        biography: "biography",
                        shows: "shows",
                        music: "music",
                        videos: "videos",
                        contact: "contact",
                        imprint: "imprint",
                    },
                    pages: {
                        home: {
                            title: "ago · new wave/electronica · stuttgart",
                        },
                        biography: {
                            title: "Biography | ago · new wave/electronica · stuttgart",
                        },
                        shows: {
                            title: "Shows | ago · new wave/electronica · stuttgart",
                        },
                        music: {
                            title: "Music | ago · new wave/electronica · stuttgart",
                        },
                        videos: {
                            title: "Videos | ago · new wave/electronica · stuttgart",
                        },
                        contact: {
                            title: "Contact | ago · new wave/electronica · stuttgart",
                        },
                        imprint: {
                            title: "Imprint | ago · new wave/electronica · stuttgart",
                        },
                    },
                },
                de: {
                    navigation: {
                        home: "home",
                        biography: "biografie",
                        shows: "konzerte",
                        music: "musik",
                        videos: "videos",
                        contact: "kontakt",
                        imprint: "impressum",
                    },
                    pages: {
                        home: {
                            title: "ago · new wave/electronica · stuttgart",
                        },
                        biography: {
                            title: "Biografie | ago · new wave/electronica · stuttgart",
                        },
                        shows: {
                            title: "Konzerte | ago · new wave/electronica · stuttgart",
                        },
                        music: {
                            title: "Musik | ago · new wave/electronica · stuttgart",
                        },
                        videos: {
                            title: "Videos | ago · new wave/electronica · stuttgart",
                        },
                        contact: {
                            title: "Kontakt | ago · new wave/electronica · stuttgart",
                        },
                        imprint: {
                            title: "Impressum | ago · new wave/electronica · stuttgart",
                        },
                    },
                },
            },
        };
    }
}
