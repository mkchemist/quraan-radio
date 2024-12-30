import React from "react";
import { useTranslation } from "react-i18next";
import AppLangSwitch from "../AppLangSwitcher/AppLangSwitcher";
import bg from "../../assets/images/bg1.jpg";

function AppSidebar() {
  let { t } = useTranslation();

  return (
    <div
      className=" py-5 lg:w-4/12 w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex flex-col items-center justify-center h-full lg:gap-y-12 gap-y-6 text-white">
        <div className="bg-black bg-opacity-50 lg:p-10 p-2 rounded">
          <p className="lg:text-6xl text-3xl">{t("quraan")}</p>
        </div>
        <AppLangSwitch />
      </div>
    </div>
  );
}

export default AppSidebar;
