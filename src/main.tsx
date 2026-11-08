import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "@/App";
import "@/index.css";

// Dev-only: open the site with ?nowebgl to test the hero's static-image fallback.
if (import.meta.env.DEV && new URLSearchParams(location.search).has("nowebgl")) {
  const orig = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (this: HTMLCanvasElement, type: string, ...rest: unknown[]) {
    return type === "webgl2" ? null : (orig as (...a: unknown[]) => unknown).call(this, type, ...rest);
  } as typeof orig;
}

document.fonts?.ready.then(() => document.documentElement.classList.add("fonts-ready"));

const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);
// production HTML is prerendered (scripts/prerender.mjs); dev renders from scratch
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
