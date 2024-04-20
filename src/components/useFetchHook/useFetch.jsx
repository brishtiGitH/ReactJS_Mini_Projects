import { useEffect, useState } from "react";

export default function useFetch({ url, options = {} }) {
  const [data, setData] = useState();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setPending(true);
      const response = await fetch(url, options);
      const apiData = await response.json();
      console.log(response);
      if (apiData) {
        setData(apiData);
        setPending(false);
      }
    } catch (err) {
      setError(err.message);
      setPending(false);
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  return [data, pending, error];
}
