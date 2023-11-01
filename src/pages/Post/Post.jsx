import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { userInfoAtom } from "../../recoil/userAtom";
import { useRecoilValue } from "recoil";

import { getComment } from "../../api/commentAPI";
import { deletePost, getPostDetail } from "../../api/postAPI";

import Loading from "../Loading/Loading";
import PostComment from "./PostComment";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";
import Posting from "../../components/Post/Posting";
import CommentInput from "./CommentInput";

function Post() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { postId } = useParams();
  const { accountname } = useRecoilValue(userInfoAtom);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

  // 게시글 상세 데이터 불러오기
  const fetchPostDetail = useCallback(async () => {
    try {
      const postData = await getPostDetail(postId);
      setIsLoading(false);
      setData(postData.post);
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  // 게시글 댓글 불러오기
  const fetchComments = useCallback(async () => {
    try {
      const commentData = await getComment(postId);
      console.log("Fetched comments: ", commentData);
      setComments(commentData.comments);
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  const fetchPostDetailAndComments = useCallback(async () => {
    await fetchPostDetail();
    await fetchComments();
  }, [fetchPostDetail, fetchComments]);

  useEffect(() => {
    fetchPostDetailAndComments();
  }, [fetchPostDetailAndComments]);

  /* 모달 뜨는거 해결하면 내 계정 / 타인 계정 나눠서 이벤트 주기 */
  /* 내 계정 -> 게시글 수정, 삭제 / 타인 계정 -> 신고 */
  // 게시글 수정 클릭이벤트
  const handleEditPost = () => {
    navigate(`/post/${postId}/edit`, {
      state: { data },
    });
  };

  // 게시글 삭제 클릭이벤트
  const handleDeletePost = async () => {
    try {
      const response = await deletePost(token, postId);
      /* 삭제 성공 시 코드 추가 */
      navigate(`/profile/${accountname}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <BackSpaceHeader />
      {isLoading ? (
        <Loading />
      ) : (
        data && (
          <Posting
            pageName="Post"
            accountName={data.author.accountname}
            profileImage={data.author.image}
            userName={data.author.username}
            postImage={data.image}
            postText={data.content}
            postId={data.id}
            heartCount={data.heartCount}
            commentCount={data.commentCount}
            postDate={data.createdAt}
            hearted={data.hearted}
          />
        )
      )}
      <button onClick={handleEditPost}>수정</button>
      <button onClick={handleDeletePost}>삭제</button>
      <CommnetContainer>
        {comments.map((comment) => (
          <PostComment
            key={comment.id}
            profilePhoto={comment.author.image}
            nickname={comment.author.username}
            minutesAgo={comment.author.minutesAgo}
            comment={comment}
            refreshComments={fetchComments}
          />
        ))}
      </CommnetContainer>
      <CommentInput onCommentPosted={fetchComments} />
    </>
  );
}

const CommnetContainer = styled.section`
  margin-bottom: 60px;
`;

export default Post;
