import { API_URL, API_KEY } from './constants';

export const composeUrl = options => {
  let composedUrl = `${API_URL}?apikey=${API_KEY}`;

  for (let key in options) {
    composedUrl += `&${key}=${options[key]}`;
  }

  return composedUrl;
};
