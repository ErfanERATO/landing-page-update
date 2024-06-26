import { useEffect, useState } from "react";
import { useMainContext } from "../context";

export const useGet = ({ url = "" }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const { get } = useMainContext();

  const getData = async () => {
    setLoading(true);
    const { data } = await get(url);
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading };
};
