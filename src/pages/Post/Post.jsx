import React from "react";
import HeaderBar from "../../components/common/Header/HomeHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import Posting from "../../components/Post/Posting";
import PostComment from "./PostComment";

function Post() {
  return (
    <>
      <HeaderBar />
      <Posting />
      <PostComment />
      <Navbar />
    </>
  );
}

export default Post;
