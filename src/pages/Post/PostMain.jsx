import React from "react";
import { PostImages } from "./PostMainStyle";

function PostMain({ postImage }) {
  return (
    <PostImages>
      <img src={postImage} alt="게시글 이미지" />
    </PostImages>
  );
}

export default PostMain;