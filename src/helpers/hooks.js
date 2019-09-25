import React from 'react';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debouncedValue;
};

export const useFetch = url => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [fetching, setFetching] = React.useState(null);
  const [fetchUrl, setFetchUrl] = React.useState(url);

  const fetchData = async () => {
    setFetching(true);
    try {
      const res = await fetch(fetchUrl);
      const json = await res.json();
      setData(json);
    } catch (error) {
      setError(error);
    }
    setFetching(false);
  };

  React.useEffect(() => {
    fetchData(fetchUrl);
  }, [fetchUrl]);

  return {
    fetchData: setFetchUrl,
    data,
    error,
    fetching,
  };
};
