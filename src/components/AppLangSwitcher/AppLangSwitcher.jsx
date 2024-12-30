import React from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { appSettings } from "../../stores/appSettings";
import { storage } from "../../utils/storage";

function AppLangSwitch() {
  let { t, i18n } = useTranslation();
  let [currentLang, setCurrentLang] = React.useState(i18n.language);
  let [settings, setSettings] = useRecoilState(appSettings);

  const languages = [
    { title: t("langs.ar"), val: "ar" },
    { title: t("langs.en"), val: "en" },
  ];

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLang(lang);
    setSettings({
      ...settings,
      lang,
    });
    storage().set("lang", lang);
  };

  return (
    <ul className="flex lg:gap-5 gap-2 bg-black bg-opacity-50 lg:p-5 p-2 rounded">
      {languages.map((lang) => (
        <li
          key={lang.val}
          onClick={() => handleLanguageChange(lang.val)}
          className={`${
            currentLang === lang.val ? "text-white underline" : "text-gray-400 "
          } cursor-pointer`}
        >
          {lang.title}
        </li>
      ))}
    </ul>
  );
}

export default AppLangSwitch;
