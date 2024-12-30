import axios from "axios";
import { useEffect, useState } from "react";

export const httpQuery = axios.create({
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

/**
 *
 * @param {string} url
 * @param {{
 *  params: object,
 *  transform: (data: any) => any
 *  }} options
 * @returns {
 *  data: any,
 *  loading: boolean,
 *  error: any
 * }
 */
export const useGet = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    httpQuery
      .get(url, {
        params: options.params ?? {},
      })
      .then((res) => {
        if (options.transform && typeof options.transform === "function") {
          setData(options.transform(res.data));
        } else {
          setData(res.data);
        }
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, options.watch ?? []);

  return {
    data,
    loading,
    error,
  };
};
