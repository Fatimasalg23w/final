import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";
import { pluginUnused } from "@gatsbylabs/vite-plugin-unused";

// reconstruir __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(({ mode, command }) => ({
  base: '/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          lucide: ['lucide-react'],
          query: ['@tanstack/react-query'],
          radix: ['@radix-ui/react-tooltip', '@radix-ui/react-toast'],
        },
      },
    },
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    command === "build" &&
      pluginUnused({
        root: "src",
        ext: ["*.ts", "*.tsx", "*.js", "*.jsx"],
        exclude: ["**/*.test.ts", "**/*.spec.ts"],
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
