export const env = {
  baseURL: process.env.REACT_APP_ISDEV
    ? process.env.REACT_APP_BASEURL
    : process.env.REACT_APP_BASEURL_PRODUCTION,
};
export const endPoint = {
  fetchDetails: "/music",
};
