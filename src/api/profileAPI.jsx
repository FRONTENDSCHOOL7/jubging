import { authAxios } from "./axios";

// 개인 프로필 정보 불러오기
export const getMyInfo = async (token) => {
  try {
    const response = await authAxios.get("/user/myinfo");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 프로필 정보 불러오기
export const getUserProfile = async (accountname) => {
  try {
    const response = await authAxios.get(`/profile/${accountname}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 프로필 수정하기
export const setUserProfile = async ({
  username,
  accountname,
  intro,
  image,
}) => {
  try {
    const userData = {
      user: {
        username: username,
        accountname: accountname,
        intro: intro,
        image: image,
      },
    };

    const response = await authAxios.put("/user", userData);
    return response.data;
  } catch (error) {
    console.log("현재 에러입니다. ", error);
  }
};
