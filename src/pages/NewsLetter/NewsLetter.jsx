import React from "react";
import HeaderBar from "../../components/common/Header/HomeHeader";
import NewsLetterPosting from "./NewsLetterPosting";
import Navbar from "../../components/common/Navbar/Navbar";

function NewsLetter() {
  return (
    <>
      <HeaderBar />
      <NewsLetterPosting />
      <Navbar />
    </>
  );
}

export default NewsLetter;