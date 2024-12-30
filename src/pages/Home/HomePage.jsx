import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function HomePage() {
  let { t } = useTranslation();

  return (
    <div className="h-full flex items-center justify-center">
      <div className="lg:w-8/12 w-full">
        <p className="text-2xl text-slate-500">{t("available_services")}</p>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-4 wrap ">
          <Link
            to="/radios"
            className="bg-orange-100 p-4 text-center rounded align-middle text-2xl hover:bg-orange-600 hover:text-white transition-all ease-in-out"
          >
            <i className="bx bx-radio text-orange-300 text-5xl bx-tada-hover"></i>
            <p>{t("services.radios")}</p>
          </Link>
          <Link
            to="/"
            className="bg-orange-100 p-4 text-center rounded align-middle text-2xl hover:bg-orange-600 hover:text-white transition-all ease-in-out"
          >
            <i className="bx bx-video text-orange-300 text-5xl bx-tada-hover"></i>
            <p>{t("services.videos")}</p>
          </Link>
          <Link
            to="/tadabor"
            className="bg-orange-100 p-4 text-center rounded align-middle text-2xl hover:bg-orange-600 hover:text-white transition-all ease-in-out"
          >
            <i className="bx bx-broadcast text-orange-300 text-5xl bx-tada-hover"></i>
            <p>{t("services.tadabor")}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
