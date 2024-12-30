import { useGet } from "../../plugins/use-fetch";
import { radiosUrl } from "../../constants/api";
import { useTranslation } from "react-i18next";

export const useRadios = (params = {}) => {
  let { i18n } = useTranslation();
  return useGet(radiosUrl, {
    params: {
      language: i18n.language === "en" ? "eng" : i18n.language,
    },
    watch: [i18n.language],
    transform: (data) => data.radios,
  });
};
