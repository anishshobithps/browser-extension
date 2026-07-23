import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/assets/theme.css";

// Keep shadcn's `.dark` class in sync with the OS theme so future `dark:`
// utilities line up with the CSS-variable theme (driven by prefers-color-scheme).
const media = window.matchMedia("(prefers-color-scheme: dark)");
const syncTheme = () =>
  document.documentElement.classList.toggle("dark", media.matches);
syncTheme();
media.addEventListener("change", syncTheme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
