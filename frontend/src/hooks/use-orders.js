import { useState, useEffect } from "react";
import apiClient from "../helpers/apiClient";

export const useOrdersFetch = (url, type, page = 0) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiClient(url, "GET", null, {
          status: type,
          page: page,
        });
        setData(response.data?.content);
        setTotalPages(response?.data?.totalPages);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, type, url]);

  return { data, loading, error, totalPages };
};
