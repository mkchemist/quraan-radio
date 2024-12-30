import React, { useLayoutEffect, useState } from "react";
import AppSidebar from "../components/AppSidebar/AppSidebar";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router";
import Player from "../components/StreamPlayer/Player";
import { useRecoilState, useRecoilValue } from "recoil";
import { radioStore } from "../stores/radioStore";
import { appSettings } from "../stores/appSettings";
import { storage } from "../utils/storage";

function AppLayout({ children }) {
  let { t, i18n } = useTranslation();
  let currentRadio = useRecoilValue(radioStore);
  let [settings, setSetting] = useRecoilState(appSettings);
  let [isBooted, setIsBooted] = useState(false);

  let navigate = useNavigate();
  let route = useLocation();

  useLayoutEffect(() => {
    let lang = storage("lang");
    if (lang) {
      i18n.changeLanguage(lang);
      setSetting({
        ...settings,
        lang,
      });
    }
    setIsBooted(true);
  }, []);

  if (!isBooted) {
    return (
      <div className="h-screen flex items-center justify-center bg-slate-900 text-blue-300">
        <div className="text-center bg-slate-800 p-12 rounded bg-opacity-30">
          <p className="text-4xl mb-5 text-orange-400">{t("quraan")}</p>
          <i className="bx bx-spin bx-loader-alt bx-lg "></i>
          <p>{t("loading")}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div
        className="flex lg:flex-row flex-col h-screen transition-opacity ease-in-out"
        dir={settings.lang === "ar" ? "rtl" : "ltr"}
      >
        <AppSidebar></AppSidebar>
        <div className="lg:w-8/12 h-full overflow-auto">
          {route.pathname !== "/" && (
            <div className="sticky top-0 z-50 bg-white  p-2 mb-4 scroll:shadow-lg">
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 bg-black text-white p-2 rounded-md"
              >
                {t("back")} <i className="bx bx-arrow-back"></i>
              </button>
            </div>
          )}
          <div className="p-4 h-full">{children}</div>
          {currentRadio.id && (
            <div className=" absolute left-0 bottom-0 w-full">
              <Player />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
