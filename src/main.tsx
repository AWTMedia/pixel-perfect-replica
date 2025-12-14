import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// GitHub Pages SPA route restore (supports direct links on refresh)
(() => {
  const url = new URL(window.location.href);
  const p = url.searchParams.get("p");

  if (p) {
    const repoBase = "/" + window.location.pathname.split("/")[1]; // "/<repo>"
    const q = url.searchParams.get("q") || "";
    const restoredPath = repoBase + p + q;

    window.history.replaceState({}, "", restoredPath + window.location.hash);
  }
})();

createRoot(document.getElementById("root")!).render(<App />);
