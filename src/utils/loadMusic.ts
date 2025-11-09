import yaml from "js-yaml";

export interface ReleaseLink {
    text: string;
    url: string;
}

export interface ReleaseLanguageContent {
    description: string;
    additionalInfo?: string;
    buyLink?: ReleaseLink;
}

export interface Release {
    id: string;
    year: number;
    title: string;
    image: string;
    spotifyUrl: string;
    embedHeight: string;
    languages: {
        en: ReleaseLanguageContent;
        de: ReleaseLanguageContent;
    };
}

export interface MusicData {
    releases: Release[];
}

export async function loadMusic(): Promise<Release[]> {
    try {
        // Try public folder first (for production), then src (for development)
        const baseUrl = import.meta.env.BASE_URL;
        let response = await fetch(`${baseUrl}music.yaml`);
        if (!response.ok) {
            response = await fetch("/src/data/music.yaml");
        }
        if (!response.ok) {
            return [];
        }
        const text = await response.text();
        const data = yaml.load(text) as MusicData;
        return data.releases || [];
    } catch (error) {
        console.error("Error loading music:", error);
        return [];
    }
}
