import React from 'react';
import { API_KEY } from './endpoints';

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

export const useFetch = (url, options = {}) => {
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);

  let composedUrl = `${url}?apikey=${API_KEY}`;

  for (let key in options) {
    composedUrl += `&${key}=${options[key]}`;
  }

  const fetchData = async () => {
    try {
      const res = await fetch(composedUrl, options);
      const json = await res.json();
      setResponse(json);
    } catch (error) {
      setError(error);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return { serverResponse: response, serverError: error };
};
