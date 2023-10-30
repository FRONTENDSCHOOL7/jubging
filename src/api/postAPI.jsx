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

// 게시글 상세보기
export const getPostDetail = async (postId) => {
  try {
    const response = await authAxios.get(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 게시글 작성
/* export const postUpload = async (token, post) => {
  const response = await authAxios.post("/post", post);
  console.log(response);
  return response.data;
}; */

export const postUpload = async (content, image, token) => {
  try {
    const postData = {
      post: {
        content: content,
        image: image,
      },
    };

    const response = await authAxios.post("/post", postData);
    return response.data;
  } catch (error) {
    console.log("현재 에러입니다. ", error);
  }
};
