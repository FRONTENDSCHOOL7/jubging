import React from "react";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";
import Posting from "../../components/Post/Posting";
import PostComment from "./PostComment";
import CommentInput from "./CommentInput";

function Post() {
  return (
    <>
      <BackSpaceHeader />
      <Posting />
      <PostComment />
      <CommentInput />
    </>
  );
}

export default Post;
