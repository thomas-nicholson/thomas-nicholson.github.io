import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5000,
    strictPort: true,
    allowedHosts: [
      '.replit.dev',
      '.repl.co',
      'localhost'
    ],
  },
  preview: {
    port: 5000,
    host: "0.0.0.0",
  },
});
