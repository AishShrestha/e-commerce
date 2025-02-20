import axios from "axios";
import nookies from "nookies";

const API = axios.create({
  baseURL: "http://localhost:5000", //backend url
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use(
  async (config) => {
    const cookies = nookies.get();
    const jwt = cookies.jwt; // retrieve JWT from cookie

    if (jwt) {
      config.headers["Authorization"] = `Bearer ${jwt}`; // Attach JWT to the headers
    }

    return config;
  },
  (error) => Promise.reject(error)
);

API.interceptors.response.use(
  (response) => response?.data,
  (error) => Promise.reject(error.response)
);

export { API };
