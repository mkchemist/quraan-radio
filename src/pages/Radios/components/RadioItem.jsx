import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { radioStore } from "../../../stores/radioStore";

function RadioItem({ radio, index }) {
  let { t } = useTranslation();
  let [currentRadio, setCurrentRadio] = useRecoilState(radioStore);

  const stopRadio = () => {
    setCurrentRadio({
      id: null,
      url: null,
      name: null,
      state: "stop",
    });
  };

  const playRadio = () => {
    setCurrentRadio({
      id: radio.id,
      url: radio.url,
      name: radio.name,
      state: "play",
    });
  };

  const pauseRadio = () => {
    setCurrentRadio({
      id: radio.id,
      url: radio.url,
      name: radio.name,
      state: "pause",
    });
  };

  return (
    <div className="bg-white  lg:p-4 p-2 hover:bg-sky-50 transition-all ease-in-out">
      <p>
        {index + 1}-{radio.name}
      </p>
      <div className="flex gap-2 my-2">
        <button
          type="button"
          className="border border-red-500 h-10 w-10 rounded-full flex items-center justify-center text-red-500"
          title={t("add_to_favorites")}
        >
          <i className="bx bxs-heart"></i>
        </button>
        {currentRadio.id !== radio.id && (
          <button
            type="button"
            className="bg-sky-600 h-10 w-10 rounded-full flex items-center justify-center text-white"
            onClick={playRadio}
            title={t("play")}
          >
            <i className="bx bx-play"></i>
          </button>
        )}
        {currentRadio.id === radio.id && (
          <>
            {currentRadio.state === "play" ? (
              <button
                type="button"
                className="bg-slate-600 h-10 w-10 rounded-full flex items-center justify-center text-white"
                onClick={pauseRadio}
                title={t("pause")}
              >
                <i className="bx bx-pause"></i>
              </button>
            ) : (
              <button
                type="button"
                className="bg-slate-600 h-10 w-10 rounded-full flex items-center justify-center text-white"
                onClick={playRadio}
                title={t("play")}
              >
                <i className="bx bx-play"></i>
              </button>
            )}

            <button
              type="button"
              className="bg-red-600 h-10 w-10 rounded-full flex items-center justify-center text-white"
              onClick={stopRadio}
              title={t("stop")}
            >
              <i className="bx bx-stop"></i>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default RadioItem;
