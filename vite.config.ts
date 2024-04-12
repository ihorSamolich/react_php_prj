// https://vitejs.dev/config/
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      components: "/src/components",
      constants: "/src/constants",
      hooks: "/src/hooks",
      pages: "/src/pages",
      services: "/src/services",
      store: "/src/store",
      types: "/src/types",
      utils: "/src/utils",
    },
  },
  preview: {
    port: 5050,
    strictPort: true,
  },
  server: {
    port: 5050,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:5050",
  },
});
