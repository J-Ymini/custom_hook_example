import { useState, useLayoutEffect as useEffect } from "react";

import axios from "axios";

const useAxios = (
  url?: string,
  options?: {},
  baseURL: string = "http://localhost:3000"
) => {
  const [status, setStatus] = useState<any>({
    loading: true,
    error: null,
    data: null,
  });
  const instance = axios.create({
    baseURL: baseURL,
  });

  useEffect(() => {
    instance
      .get(url as string)
      .then(({ data }) => {
        setStatus({ ...status, loading: false, data: data });
      })
      .catch((error) => alert(error));
  }, []);

  return status;
};

export default useAxios;
