import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: ["favicon.ico", "fiap.png"],
      manifest: {
        name: "FIAP",
        short_name: "FIAP",
        description: "Educação que transforma",
        theme_color: "#e91c5d",
        icons: [
          {
            src: "fiap.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
