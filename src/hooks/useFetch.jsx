import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function fetchData() {
      try {
        setLoading(true);

        const response = await axios.get(url);

        if (isMounted) {
          setData(response.data);
          setError("");
        }
      } catch (error) {
        if (isMounted) {
          setError(
            "Unable to load products. Please try again."
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;