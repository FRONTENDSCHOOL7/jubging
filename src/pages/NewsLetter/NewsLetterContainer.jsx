import React from "react";
import NewsLetterHeader from "./NewsLetterHeader";
import NewsLetterMain from "./NewsLetterMain";
import NewsLetterFooter from "./NewsLetterFooter";
import PostDividingLine from "../Post/PostDividingLine";

function NewsLetterContainer(props) {
  return (
    <>
      <NewsLetterHeader
        profilePhoto = {props.profilePhoto}
        nickname = {props.nickname}
        userId = {props.userId}
      />
      <NewsLetterMain postImage = {props.postImage} />
      <NewsLetterFooter
        postText = {props.postText}
        likes = {props.likes}
        comments = {props.comments}
        postDate = {props.postDate}
      />
      <PostDividingLine />
    </>
  );
}

export default NewsLetterContainer;