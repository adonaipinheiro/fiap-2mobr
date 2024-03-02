import { useState } from "react";

interface RequestError {
  message: string;
}

export function useService<T>(
  request: Promise<T>
) {
  const [data, setData] = useState<T>();
  const [error, setError] =
    useState<RequestError>();
  const [loading, setLoading] = useState(false);

  function callRequest() {
    setLoading(true);
    request
      .then((resp) => setData(resp))
      .catch((err) => {
        setError({ message: `ERROR: ${err}` });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return {
    data,
    error,
    loading,
    callRequest,
  };
}
