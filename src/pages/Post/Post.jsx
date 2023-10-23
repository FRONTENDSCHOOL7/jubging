import React from "react";
import HeaderBar from "../../components/common/Header/HomeHeader";
import HomePosting from "../Home/HomePosting";
import PostDetail from "./PostDetail";
import Navbar from "../../components/common/Navbar/Navbar";

function Post() {
  return (
    <>
      <HeaderBar />
      <HomePosting />
      <PostDetail />
      <Navbar />
    </>
  );
}

export default Post;