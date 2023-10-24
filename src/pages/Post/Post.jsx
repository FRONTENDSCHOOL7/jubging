import React from "react";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import Posting from "../../components/Post/Posting";
import PostComment from "./PostComment";

function Post() {
  return (
    <>
      <BackSpaceHeader />
      <Posting />
      <PostComment />
      <Navbar />
    </>
  );
}

export default Post;
