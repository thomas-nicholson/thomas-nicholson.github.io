import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    allowedHosts: [
      "55e398dd-c42b-4c13-bfc8-ff12fa07ae0f-00-2r8193un22sci.sisko.repl.co",
    ],
  },
});
