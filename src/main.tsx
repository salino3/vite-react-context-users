import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import App from "./App";
import { MyProvider } from "./core";
import * as global_es from "./translations/es";
import * as global_en from "./translations/en";
import * as global_it from "./translations/it";
import "animate.css";
import "./index";

const storedLanguage = sessionStorage.getItem("selectedLanguage") || "es";

i18next.init({
  interpolation: { escapeValue: false },
  lng: storedLanguage,
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
    it: {
      global: global_it,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MyProvider>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </I18nextProvider>
    </MyProvider>
  </React.StrictMode>
);
