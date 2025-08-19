import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Импорт Router
import App from "./App";
import "./index.css"; // <--- вот это обязательно
import { SessionProvider } from "./context/SessionContext";
import AuthProvider from "./context/AuthContext";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  if (root) {
    ReactDOM.createRoot(root).render(
      <React.StrictMode>
        <BrowserRouter basename="/movie-tickets/">
          <AuthProvider>
            <SessionProvider>
              <App />
            </SessionProvider>
          </AuthProvider>
        </BrowserRouter>
      </React.StrictMode>
    );
  }
});
