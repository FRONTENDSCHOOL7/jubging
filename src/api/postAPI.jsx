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
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
