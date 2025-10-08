import i18next, { init } from "i18next";
import { initReactI18next } from "react-i18next";
import am from "./locales/am/translation.json"
import ru from "./locales/ru/translation.json"
import en from "./locales/en/translation.json"

i18next.use(initReactI18next).init({
    resources: {
        am: {translation: am},
        ru: {translation: ru},
        en: {translation: en},
    },
    lng: "am",
    fallbackLng: "en",
})

export default i18next
  