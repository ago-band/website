import yaml from "js-yaml";

export interface ShowLink {
    facebook?: string;
    tickets?: string;
    organizer?: string;
    [key: string]: string | undefined;
}

export interface Show {
    date: string;
    venue: string;
    description?: string;
    supportingActs?: string[];
    links?: ShowLink;
    status: "upcoming" | "past" | "cancelled";
    title?: string;
}

interface ShowInput {
    date: string;
    venue: string;
    description?: string;
    supportingActs?: string[];
    links?: ShowLink;
    status?: "cancelled";
    title?: string;
}

export interface ShowsData {
    shows: ShowInput[];
}

function computeStatus(show: ShowInput): "upcoming" | "past" | "cancelled" {
    // If explicitly cancelled, keep it as cancelled
    if (show.status === "cancelled") {
        return "cancelled";
    }
    
    // Otherwise, compute based on date
    const showDate = new Date(show.date);
    const today = new Date();
    // Reset time to midnight for accurate date comparison
    today.setHours(0, 0, 0, 0);
    showDate.setHours(0, 0, 0, 0);
    
    return showDate < today ? "past" : "upcoming";
}

export async function loadShows(): Promise<Show[]> {
    try {
        // Try public folder first (for production), then src (for development)
        const baseUrl = import.meta.env.BASE_URL;
        let response = await fetch(`${baseUrl}shows.yaml`);
        if (!response.ok) {
            response = await fetch("/src/data/shows.yaml");
        }
        if (!response.ok) {
            return [];
        }
        const text = await response.text();
        const data = yaml.load(text) as ShowsData;
        const shows = data.shows || [];
        
        // Compute status dynamically for each show
        return shows.map(show => ({
            ...show,
            status: computeStatus(show),
        }));
    } catch (error) {
        console.error("Error loading shows:", error);
        return [];
    }
}
