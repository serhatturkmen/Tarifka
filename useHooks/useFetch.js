import { useState, useEffect } from "react";
import axios from "axios";

BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

export const useFecth = (api_url) => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(true);
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      setLoading(true);
      const { data: responseData } = await axios.get(BASE_URL + api_url);
      setData(responseData);
      setError(false);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return { loading, error, data };
};
