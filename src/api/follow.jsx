import { authAxios } from "./axios";

// 팔로워 리스트 가져오기
export const getFollowerList = async (accountname) => {
  try {
    const response = await authAxios.get(`/profile/${accountname}/follower`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// 팔로잉 리스트 가져오기
export const getFollowingList = async (accountname) => {
  try {
    const response = await authAxios.get(`/profile/${accountname}/following`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// 팔로우
export const setFollowUser = async (accountname) => {
  try {
    const response = await authAxios.post(`/profile/${accountname}/follow`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

// 언팔로우
export const setUnFollowUser = async (accountname) => {
  try {
    const response = await authAxios.delete(`/profile/${accountname}/unfollow`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
