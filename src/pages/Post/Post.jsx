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
    try{
        const commentData = await getComment(postId);
        setComments(commentData.comments);
    } catch(error){
        console.log(error)
    }
    
  }, [postId]);

  // 게시글 상세 데이터 및 댓글 리스트 가져오기
  // 같이 불러오게 되면 postId가 변경되지 않는 한 같은 함수 참조를 유지할 수 있어서 불필요한 리렌더링을 방지하고 성능을 최적화하는데 도움이 된다고 함
  const fetchPostDetailAndComments = useCallback(async () => {
    await fetchPostDetail();
    await fetchComments();
  }, [fetchPostDetail, fetchComments]);

  useEffect(() => {
    fetchPostDetailAndComments(); 
    }, [fetchPostDetailAndComments]);

  // 따로 불러올 수 있으나, postId가 변경될 때마다 두 개가 독립적으로 업뎃됨
  // 서버에서 데이터를 가져오는 시점에서 약간 차이날 수 있음
  // useEffect(() => {
  //   fetchPostDetail();
  // }, [fetchPostDetail]);

  // useEffect(() => {
  //   fetchComments();
  // }, [fetchComments]);

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
