import { basicAxios } from "./axios";

export const postSignUp = async (
  username,
  email,
  password,
  accountname,
  intro,
  image
) => {
  const userData = {
    user: {
      username: username,
      email: email,
      password: password,
      accountname: accountname,
      intro: intro,
      image: image,
    },
  };

  const response = await basicAxios.post("/user/", userData);
  return response.data;
};

// 이메일 중복 검사 함수
export const checkEmail = async (email) => {
  const userEmail = {
    user: {
      email: email,
    },
  };
  try {
    const response = await basicAxios.post("/user/emailvalid", userEmail);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 계정ID 중복 검사 함수
export const checkAccountname = async (accountname) => {
  const userAccountname = {
    user: {
      accountname: accountname,
    },
  };
  try {
    const response = await basicAxios.post(
      "/user/accountnamevalid",
      userAccountname
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
