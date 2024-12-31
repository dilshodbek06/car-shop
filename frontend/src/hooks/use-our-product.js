import { useState, useEffect } from "react";
import apiClient from "../helpers/apiClient";

export const useOurProductsFetch = (
  url,
  currentPage = 1,
  type = "all",
  count
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiClient(url, "GET", null, {
          //   page: currentPage,
          type: type,
          count: count,
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [count, currentPage, type, url]);

  return { data, loading, error };
};
