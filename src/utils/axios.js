import axios from "axios";

// Set config defaults when creating the instance
const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BaseUrl}`,
});

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    config.headers["content-type"] = "application/json";
    config.headers.Authorization = `Bearer ${localStorage.getItem("Token")}`;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default api;
