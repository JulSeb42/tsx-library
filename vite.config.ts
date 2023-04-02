import react from "@vitejs/plugin-react"
import path from "node:path"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import eslint from "vite-plugin-eslint"

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
        eslint(),
    ],
    build: {
        lib: {
            entry: path.resolve(__dirname, "src/lib/index.ts"),
            name: "tsx-library-julseb",
            formats: ["es", "umd"],
            fileName: format => `tsx-library-julseb.${format}.js`,
        },

        rollupOptions: {
            external: [
                "react",
                "react-dom",
                "styled-components",
                "fuse.js",
                "react-router-dom",
                "markdown-to-jsx",
                "react-helmet",
                "react-inlinesvg",
                "react-syntax-highlighter",
                "ts-utils-julseb",
            ],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                    "styled-components": "styled",
                },
            },
        },
    },
})
