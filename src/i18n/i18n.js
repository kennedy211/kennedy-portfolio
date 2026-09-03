import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import es from "./locales/es.json";
import en from "./locales/en.json";

const resources = {
    ES: {
        translation: es,
    },

    EN: {
        translation: en,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,

        lng: "ES",

        fallbackLng: "ES",

        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;