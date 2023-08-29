import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/dapi.kakao": {
        target: "https://dapi.kakao.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/dapi.kakao/, ""),
        secure: false,
        ws: true,
      },
    },
  },
});
