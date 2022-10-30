import axios from "axios";
import { env } from "./constants";

// import { logoutUser } from '../store/reducers/userReducer';
const interceptors = {
  setupInterceptors: (store) => {
    axios.interceptors.request.use(
      (config) => {
        if (config.url.includes(env.baseURL)) {
          config.headers.Authorization = "akchauhan2";
          config.headers["X-Requested-With"] = "akchauhan2";
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
    // const { dispatch } = store;
    // Add a response interceptor
    axios.interceptors.response.use(
      (response) => {
        return Promise.resolve(response && response);
      },
      (error) => {
        console.log("error.response : :", error.response);
        if (
          error.response &&
          [
            "Token Expired...!! Authenticate again to login..!!",
            "Token not in right culture / format",
            'if any exception - "Token validation failed',
            "Unauthorized code",
            "Session has expired",
          ].includes(error.response.data)
          // error.response.status === 401 &&
          // error.response.statusText === 'Unauthorized'
        ) {
          console.log(
            error,
            "Token Expired...!! Authenticate again to login..!!"
          );
        } else {
          console.log(error, "server taking longer than usual!!");
        }

        return Promise.reject(error);
      }
    );
  },
};

export default interceptors;
