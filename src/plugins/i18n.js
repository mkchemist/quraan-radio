import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locale/en";
import ar from "../locale/ar";
import { DEFAULT_APP_LANG } from "../constants/settings";

export function registerI18n() {
  i18next.use(initReactI18next).init({
    fallbackLng: DEFAULT_APP_LANG,
    resources: {
      en: {
        translation: en,
      },
      ar: {
        translation: ar,
      },
    },
  });
}
