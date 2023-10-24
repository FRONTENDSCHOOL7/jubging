import React from "react";
import HeaderBar from "../../components/common/Header/HomeHeader";
import Posting from "../../components/Post/NewsPosting";
import Navbar from "../../components/common/Navbar/Navbar";

function NewsLetter() {
  return (
    <>
      <HeaderBar />
      <Posting />
      <Navbar />
    </>
  );
}

export default NewsLetter;
