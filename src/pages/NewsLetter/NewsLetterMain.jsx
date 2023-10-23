import React from "react";
import { PostImages } from "./NewsLetterMainStyle";

function NewsLetterMain({ postImage }) {
  return (
    <PostImages>
      <img src={postImage} alt="게시글 이미지" />
    </PostImages>
  );
}

export default NewsLetterMain;