import { basicAxios } from "./axios";

export const postLogin = async (email, password) => {
  const loginData = {
    user: {
      email: email,
      password: password,
    },
  };

  const response = await basicAxios.post("/user/login", loginData);
  console.log("response data", response);

  return response.data;
};
