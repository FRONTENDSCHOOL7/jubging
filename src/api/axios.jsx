import axios from "axios";

const BASE_URL = "https://api.mandarin.weniv.co.kr/";

// 기본 인스턴스
export const basicAxios = axios.create({
  baseURL: BASE_URL,
  header: {
    "Content-type": "application/json",
  },
});

// 인증이 필요한 인스턴스
export const authAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Content-type": "application/json",
  },
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (config.headers.Authorization.includes("null")) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    console.log("intercepter: ", config);
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
