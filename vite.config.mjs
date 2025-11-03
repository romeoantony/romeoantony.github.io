import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Use relative asset paths so the built site works whether served from
  // the repository subpath or a root domain (GitHub Pages). This avoids
  // leading-slash absolute URLs like "/assets/..." which can 404 when the
  // site is hosted under a repo path.
  // Use an empty base to force generated asset URLs to be relative
  // (avoid leading '/' absolute paths which bypass the <base> tag).
  base: "",
  publicDir: "public",
});
