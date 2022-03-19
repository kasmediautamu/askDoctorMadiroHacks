import axios from "axios";

const api = (token: string) => {
  const defaultOptions = {
    baseURL: "http://localhost:3005/",
    headers: {
      "Content-Type": "application/json",
    },
  };

  let instance = axios.create(defaultOptions);
  instance.interceptors.request.use(function (config: any) {
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });
  return instance;
};

export default api;
