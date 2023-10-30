import { authAxios } from "./axios";

// 댓글 작성
export const postComment = async (postId, comment) => {
  const commentData = {
    comment: {
      content: comment,
    },
  };
  const response = await authAxios.post(
    `/post/${postId}/comments`,
    commentData
  );
  return response.data;
};

/* 댓글 리스트 */
export const getComment = async (postId) => {
  try {
    const response = await authAxios.get(`/post/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 댓글 삭제 */
export const deleteComment = async (commentId) => { // postId, comment -> commentId 변경
  try {
    const response = await authAxios.delete(
      `/comments/${commentId}` // `/post/${postId}/comments/${comment.id}` -> `/comments/${commentId}` 변경
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

/* 댓글 신고 */
export const reportComment = async (postId, comment) => {
  try {
    const response = await authAxios.post(
      `/post/${postId}/comments/${comment.id}/report`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};