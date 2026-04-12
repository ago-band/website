import yaml from "js-yaml";

export interface HomeLanguageContent {
    paragraphs: string[];
}

export interface HomeData {
    home: {
        languages: {
            en: HomeLanguageContent;
            de: HomeLanguageContent;
        };
    };
}

export async function loadHome(): Promise<HomeData["home"] | null> {
    try {
        const baseUrl = import.meta.env.BASE_URL;
        let response = await fetch(`${baseUrl}home.yaml`);
        if (!response.ok) {
            response = await fetch("/src/data/home.yaml");
        }
        if (!response.ok) {
            return null;
        }
        const text = await response.text();
        const data = yaml.load(text) as HomeData;
        return data.home || null;
    } catch (error) {
        console.error("Error loading home:", error);
        return null;
    }
}
