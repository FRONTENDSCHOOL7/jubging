import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { getComment } from "../../api/commentAPI";
import { getPostDetail } from "../../api/postAPI";

import Loading from "../Loading/Loading";
import PostComment from "../../components/Post/PostComment";
import Posting from "../../components/Post/Posting";
import CommentInput from "../../components/Post/CommentInput";
import Header from "../../components/common/Header/Header";

function Post() {
  const { postId } = useParams();

  const [skip, setSkip] = useState();
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
      const commentData = await getComment(postId, Infinity, skip);
      setComments(commentData.comments.reverse());
    } catch (error) {
      console.log(error);
    }
  }, [postId, skip]);

  const fetchPostDetailAndComments = useCallback(async () => {
    await fetchPostDetail();
    await fetchComments();
  }, [fetchPostDetail, fetchComments]);

  useEffect(() => {
    fetchPostDetailAndComments();
  }, [fetchPostDetailAndComments]);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loading />
      ) : (
        data && (
          <Posting
            pageName="Post"
            data={data}
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
            accountName={comment.author.accountname}
            postId={postId}
            profilePhoto={comment.author.image}
            nickname={comment.author.username}
            comment={comment}
            commentData={comment.createdAt}
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
