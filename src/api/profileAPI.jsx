import { authAxios } from "./axios";

export const getMyinfo = async (token) => {
  try {
    const response = await authAxios.get("/user/myinfo");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
