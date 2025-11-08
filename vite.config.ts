import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: "copy-yaml",
            buildStart() {
                // Copy YAML files to public during build
                try {
                    copyFileSync(
                        resolve(__dirname, "src/data/routes.yaml"),
                        resolve(__dirname, "public/routes.yaml")
                    );
                    copyFileSync(
                        resolve(__dirname, "src/data/shows.yaml"),
                        resolve(__dirname, "public/shows.yaml")
                    );
                    copyFileSync(
                        resolve(__dirname, "src/data/language.yaml"),
                        resolve(__dirname, "public/language.yaml")
                    );
                } catch (err) {
                    // Ignore errors in dev mode
                }
            },
        },
    ],
    base: "/",
    build: {
        outDir: "dist",
        assetsDir: "assets",
        copyPublicDir: true,
    },
    publicDir: "public",
});
