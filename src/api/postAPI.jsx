import { authAxios } from "./axios";

// 팔로우한 유저의 게시글 불러오기
export const getFollowFeed = async (limit, skip, token) => {
  try {
    const response = await authAxios.get("/post/feed", {
      params: {
        limit,
        skip,
      },
    });
    const { posts } = response.data;
    return posts;
  } catch (error) {
    console.log(error);
  }
};

// 게시물 상세보기
export const getPostDetail = async (postId) => {
  try {
    const response = await authAxios.get(`/post/${postId}`);
    return response.data.post;
  } catch (error) {
    console.log(error);
  }
};

// 유저 별 게시글 목록
export const getUserFeed = async (accountname) => {
  try {
    const response = await authAxios.get(`/post/${accountname}/userpost`);
    return response.data.post;
  } catch (error) {
    console.log(error);
  }
};

// 유저 별 코스 목록
export const getUserCourse = async (accountname) => {
  try {
    const response = await authAxios.get(`/product/${accountname}`);
    return response.data.product;
  } catch (error) {
    console.log(error);
  }
};

// 코스 상세보기
export const getCoutseDetail = async (courseId) => {
  try {
    const response = await authAxios.get(`/product/detail/${courseId}`);
    return response.data.product;
  } catch (error) {
    console.log(error);
  }
};
