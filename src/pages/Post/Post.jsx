import React, { useCallback, useEffect, useState } from "react";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";
import Posting from "../../components/Post/Posting";
import PostComment from "./PostComment";
import CommentInput from "./CommentInput";
import { useParams } from "react-router-dom";
import { getPostDetail } from "../../api/postAPI";
import Loading from "../Loading/Loading";

function Post() {
  const { postId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoaing] = useState(true);

  // 게시글 상세 데이터 불러오기
  const fetchPostDetail = useCallback(async () => {
    const postData = await getPostDetail(postId);
    setIsLoaing(false);
    setData(postData.post);

    try {
    } catch (error) {
      console.log(error);
    }
  }, [postId]);

  useEffect(() => {
    fetchPostDetail();
  }, [fetchPostDetail]);

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
      <PostComment />
      <CommentInput />
    </>
  );
}

export default Post;
