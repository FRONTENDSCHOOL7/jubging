import React, { useCallback, useEffect, useState } from "react";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";
import Posting from "../../components/Post/Posting";
import PostComment from "./PostComment";
import CommentInput from "./CommentInput";
import { useParams } from "react-router-dom";
import { getPostDetail } from "../../api/postAPI";
import Loading from "../Loading/Loading";
import { getComment } from "../../api/commentAPI";

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

  const fetchComments = useCallback(async () => {
    const commentData = await getComment(postId);
    setComments(commentData.comments);
  }, [postId]);

  // 게시글 상세 데이터 및 댓글 리스트 가져오기
  const fetchPostDetailAndComments = useCallback(async () => {
    await fetchPostDetail();
    await fetchComments();
  }, [fetchPostDetail, fetchComments]);

  useEffect(() => {
    fetchPostDetail();
  }, [fetchPostDetail]);

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
      <CommentInput onCommentPosted={fetchComments} />
    </>
  );
}

export default Post;
