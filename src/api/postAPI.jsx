import { authAxios } from "./axios";

// 팔로우한 유저의 게시글 불러오기
export const getFollowFeed = async (limit, skip, token) => {
  try {
    const response = await authAxios.get("/post/feed", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
    console.log(error);
  }
};

// 게시글 수정
export const putEditPost = async (postId, content, image) => {
  try {
    const editData = {
      post: {
        content: content,
        image: image,
      },
    };
    const response = await authAxios.put(`/post/${postId}`, editData);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 게시글 삭제
export const deletePost = async (token, postId) => {
  try {
    const response = await authAxios.delete(`/post/${postId}`, token);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 게시물 신고
export const reportPost = async (token, postId) => {
  try {
    const response = await authAxios.post(`/post/${postId}/report`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 게시글 전체 불러오기
export const getPostAll = async (limit, skip, token) => {
  try {
    const response = await authAxios.get("/post", {
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

// 유저 별 게시글 목록
export const getUserFeed = async (limit, skip, accountname) => {
  try {
    const response = await authAxios.get(`/post/${accountname}/userpost`, {
      params: {
        limit,
        skip,
      },
    });
    return response.data.post;
  } catch (error) {
    console.log(error);
  }
};

// 코스 등록
export const postCourseUpload = async (product) => {
  console.log(product);
  try {
    const response = await authAxios.post(`/product`, product);
    return response.data;
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
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 코스 삭제
export const getCourseDelete = async (courseId) => {
  try {
    const response = await authAxios.delete(`/product/${courseId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//코스 수정
export const putEditCourse = async (courseId, product, token) => {
  try {
    const response = await authAxios.put(`/product/${courseId}`, product, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 좋아요
export const postLike = async (token, postId) => {
  try {
    const response = await authAxios.post(`/post/${postId}/heart`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// 좋아요 취소
export const postDisLike = async (token, postId) => {
  try {
    const response = await authAxios.delete(`/post/${postId}/unheart`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
