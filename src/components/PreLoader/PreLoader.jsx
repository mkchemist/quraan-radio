import React from "react";
import "./per-loader.css";
import { useTranslation } from "react-i18next";

function PreLoader() {
  let { t } = useTranslation();
  return (
    <div className="p-12 text-center align-middle">
      <span className="loader"></span>
      <p className="text-2xl text-slate-500">{t("loading")}</p>
    </div>
  );
}

export default PreLoader;
