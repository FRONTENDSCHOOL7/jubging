import { basicAxios } from "./axios";

// 다른 사람들은 회원가입 -> 프로필 설정 (전부 다) -> 로그인
// 우리는 회원가입 (이름, id) -> 프로필 (사진, 소개)-> 로그인?
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
  console.log("response data" + response);
  return response.data;
};

// Request 보내야 하는 거
// {
// 		"user": {
// 				"username": String*,
// 				"email": String*,
// 				"password": String*,
// 				"accountname": String*,
// 				"intro": String,
// 				"image": String // 예시) https://api.mandarin.weniv.co.kr/1641906557953.png
// 		}
// }
