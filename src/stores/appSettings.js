import { atom } from "recoil";
import { DEFAULT_APP_LANG } from "../constants/settings";

export const appSettings = atom({
  key: "AppSettings",
  default: {
    lang: DEFAULT_APP_LANG,
  },
});
