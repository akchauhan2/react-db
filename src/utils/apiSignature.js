import axios from "axios";

export function getCall(urls, params = {}) {
  const url = urls;
  return axios
    .get(url, params)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}

export function getCallWithParams(url, params) {
  const config = {};
  config.params = params;
  return axios
    .get(url, config)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}

/**
 * API Post Call
 * @param {url} string api address
 * @param {data} object payload that is to be passed to the api
 * @param {securityToken} string token value to be passed with the call
 * @param {customPayload} boolean custom payload if do not want to send default payload items with the api. to be used with apis other than that of the main api
 * @returns [{text:value,value:groudCode},{text:value,value:groudCode}] in asc order of value
 */
export function postCall(url, data, securityToken, customPayload) {
  let headers = {
    "Content-Type": "application/json",
  };

  if (securityToken) {
    headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${securityToken}`,
    };
  }

  // getLocalStorage('base-auth') ? payload :
  return axios
    .post(
      url,
      { ...data },
      {
        headers,
      }
    )
    .then(async (response) => {
      return { response };
    })
    .catch((error) => ({ error }));
}

export function deleteCall(url, data) {
  return axios
    .delete(url, data)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}

export function putCall(url, data) {
  return axios
    .put(url, data)
    .then((response) => ({ response }))
    .catch((error) => ({ error }));
}
