import yaml from "js-yaml";

export interface Route {
    path: string;
}

export interface RoutesData {
    routes: Route[];
}

// Default routes if YAML loading fails
const defaultRoutes: Route[] = [
    { path: "/" },
    { path: "/biography" },
    { path: "/shows" },
    { path: "/music" },
    { path: "/videos" },
    { path: "/contact" },
    { path: "/imprint" },
];

export async function loadRoutes(): Promise<Route[]> {
    try {
        // Try public folder first (for production), then src (for development)
        let response = await fetch("/routes.yaml");
        if (!response.ok) {
            response = await fetch("/src/data/routes.yaml");
        }
        if (!response.ok) {
            return defaultRoutes;
        }
        const text = await response.text();
        const data = yaml.load(text) as RoutesData;
        return data.routes || defaultRoutes;
    } catch (error) {
        console.error("Error loading routes:", error);
        return defaultRoutes;
    }
}
