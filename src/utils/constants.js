export const env = {
  baseURL: process.env.REACT_APP_ISDEV
    ? process.env.REACT_APP_BASEURL
    : './'
};
export const endPoint = {
  fetchDetails: "/music",
};
