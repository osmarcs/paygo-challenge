const BASE_URL = '//localhost:3001';

export function getBaseURL() {
  return BASE_URL;
}

export function http(url, options) {
  let resourceURL = url;
  if (!url.startsWith('http') && !url.startsWith(BASE_URL)) {
    resourceURL = `${BASE_URL}/${url}`;
  }
  return fetch(resourceURL, options);
}
