import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getComment } from "../../api/commentAPI";
import { getPostDetail } from "../../api/postAPI";
import Loading from "../Loading/Loading";
import PostComment from "./PostComment";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";
import Posting from "../../components/Post/Posting";
import CommentInput from "./CommentInput";

function Post() {
  const { postId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoaing] = useState([true]);
  const [comments, setComments] = useState([]);

  // 게시글 상세 데이터 불러오기
  const fetchPostDetail = useCallback(async () => {
    try {
      const postData = await getPostDetail(postId);
      setIsLoaing(false);
      setData(postData.post);
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  // 게시글 댓글 불러오기
  const fetchComments = useCallback(async () => {

    try{
      const commentData = await getComment(postId);
      console.log('Fetched comments: ', commentData);
      setComments(commentData.comments);
    } catch(error){
      console.log(error)
    }
  }, [postId]);

 const fetchPostDetailAndComments = useCallback(async () => {
    await fetchPostDetail();
    await fetchComments();
  }, [fetchPostDetail, fetchComments]);

  useEffect(() => {
    fetchPostDetailAndComments(); 
    }, [fetchPostDetailAndComments]);

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
