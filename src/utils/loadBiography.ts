import yaml from "js-yaml";

export interface BiographyLanguageContent {
    paragraphs: string[];
}

export interface BiographyData {
    biography: {
        languages: {
            en: BiographyLanguageContent;
            de: BiographyLanguageContent;
        };
    };
}

export async function loadBiography(): Promise<
    BiographyData["biography"] | null
> {
    try {
        const baseUrl = import.meta.env.BASE_URL;
        let response = await fetch(`${baseUrl}biography.yaml`);
        if (!response.ok) {
            response = await fetch("/src/data/biography.yaml");
        }
        if (!response.ok) {
            return null;
        }
        const text = await response.text();
        const data = yaml.load(text) as BiographyData;
        return data.biography || null;
    } catch (error) {
        console.error("Error loading biography:", error);
        return null;
    }
}
