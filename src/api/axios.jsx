import axios from "axios";

const BASE_URL = "https://api.mandarin.weniv.co.kr/";

// 기본 axios
export const basicAxios = axios.create({
  baseURL: BASE_URL,
  header: {
    "Content-type": "application/json",
  },
});
