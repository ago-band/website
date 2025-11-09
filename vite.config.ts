import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { copyFileSync, existsSync } from "fs";
import { resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const yamlFiles = [
    { src: "src/data/routes.yaml", dest: "public/routes.yaml" },
    { src: "src/data/shows.yaml", dest: "public/shows.yaml" },
    { src: "src/data/language.yaml", dest: "public/language.yaml" },
    { src: "src/data/music.yaml", dest: "public/music.yaml" },
];

function copyYamlFiles() {
    yamlFiles.forEach(({ src, dest }) => {
        const srcPath = resolve(__dirname, src);
        const destPath = resolve(__dirname, dest);
        if (existsSync(srcPath)) {
            try {
                copyFileSync(srcPath, destPath);
            } catch (err) {
                console.error(`Error copying ${src} to ${dest}:`, err);
            }
        }
    });
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: "copy-yaml",
            buildStart() {
                // Copy YAML files to public during build
                copyYamlFiles();
            },
            configureServer(server) {
                // Watch YAML files and copy them when they change
                yamlFiles.forEach(({ src }) => {
                    const srcPath = resolve(__dirname, src);
                    server.watcher.add(srcPath);
                });

                server.watcher.on("change", (file) => {
                    const changedFile = yamlFiles.find(({ src }) => {
                        const srcPath = resolve(__dirname, src);
                        return file === srcPath;
                    });

                    if (changedFile) {
                        copyYamlFiles();
                        // Trigger a reload of the affected YAML file
                        server.ws.send({
                            type: "full-reload",
                        });
                    }
                });
            },
        },
    ],
    // Use environment variable for base path, default to "/"
    // For GitHub Pages subdirectory: "/repository-name/"
    // For custom domain or username.github.io: "/"
    base: process.env.VITE_BASE_PATH || "/",
    build: {
        outDir: "dist",
        assetsDir: "assets",
        copyPublicDir: true,
    },
    publicDir: "public",
});
