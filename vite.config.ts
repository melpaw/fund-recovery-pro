import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";

// Portable TanStack Start config. Runs on Lovable, Cloudflare Pages, Netlify,
// Vercel, and any Node/CI environment with `npm run build`.
// Nitro auto-detects the deploy target from CI env vars (CF_PAGES=1, NETLIFY=true,
// VERCEL=1); locally it falls back to the standard node-server preset.
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    strictPort: false,
  },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      customViteReactPlugin: true,
      server: { entry: "./src/server.ts" },
    }),
    viteReact(),
  ],
  resolve: {
    dedupe: ["react", "react-dom", "@tanstack/react-router", "@tanstack/react-start"],
  },
});
