import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    debugger;
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method:  requestConfig.method ? requestConfig.method : 'get',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    sendRequest : sendRequest,
    isLoading : isLoading,
    error : error,
  };
};

export default useHttp;
