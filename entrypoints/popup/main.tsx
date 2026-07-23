import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@/assets/theme.css";

// Match the OS theme so shadcn `dark:` utilities + CSS-variable theme agree.
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
