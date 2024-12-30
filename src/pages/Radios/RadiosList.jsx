import React, { useEffect, useState } from "react";
import PreLoader from "../../components/PreLoader/PreLoader";
import { useRadios } from "./hooks";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import RadioItem from "./components/RadioItem";

function RadiosList() {
  let { t } = useTranslation();
  let { data, loading } = useRadios();
  let [viewList, setViewList] = useState([]);
  let [search, setSearch] = useState(null);

  useEffect(() => {
    if (data) {
      setViewList(data);
    }
  }, [data]);

  useEffect(() => {
    if (!data) return;
    if (!search) {
      setViewList(data);
    } else {
      let filtered = data.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
      setViewList(filtered);
    }
  }, [search]);

  return (
    <div>
      <div className="flex justify-between items-center flex-wrap gap-y-5">
        <p className="text-4xl flex items-center gap-2">
          <i className="bx bx-radio"></i> {t("services.radios")}
        </p>
        <div className="lg:w-auto w-full gap-2 flex flex-wrap">
          <select className="border p-2 rounded-md outline-none focus-within:border-sky-500 transition-all ease-in-out text-slate-500 focus-within:text-sky-600 lg:w-auto w-full">
            <option value="">{t("view_all")}</option>
            <option value="">{t("favorites")}</option>
          </select>
          <div className="border p-2 rounded-md outline-none focus-within:border-sky-400 transition-all ease-in-out text-sky-200 flex gap-1  items-center focus-within:text-sky-600 placeholder:text-sky-200 lg:w-auto w-full">
            <i className="bx bx-search"></i>
            <input
              type="search"
              placeholder={t("search")}
              onKeyUp={(e) => setSearch(e.target.value)}
              className="outline-none"
            />
          </div>
        </div>
      </div>
      <hr className="my-3" />
      {loading || !data ? (
        <PreLoader></PreLoader>
      ) : (
        <>
          {data.length && viewList.length ? (
            <div className="scale-up-center">
              {viewList.map((radio, index) => (
                <div key={radio.id} className="border-b">
                  <RadioItem radio={radio} index={index} />
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full h-64 flex items-center justify-center text-4xl text-slate-500 scale-up-center">
              {t("nothing_found")}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default RadiosList;
