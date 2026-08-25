import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

const redirect = new URLSearchParams(window.location.search).get(
    "redirect"
);

if (redirect) {
    window.history.replaceState(
        null,
        "",
        `${import.meta.env.BASE_URL}${redirect.replace(/^\/+/, "")}`
    );
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <App />
        </BrowserRouter>
    </StrictMode>
);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register(
            `${import.meta.env.BASE_URL}sw.js`
        )
            .then(() => {
                console.log("Service worker registered");
            })
            .catch((error) => {
                console.error(
                    "Service worker registration failed:",
                    error
                );
            });
    });
}