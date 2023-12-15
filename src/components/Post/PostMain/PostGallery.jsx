import React from "react";
import { Link } from "react-router-dom";
import { PostImages } from "./PostMainStyle";

export default function PostGallery({ postId, postImage }) {
  return (
    <>
      <Link to={`/post/${postId}`}>
        <PostImages>
          <img src={postImage} alt="게시글 이미지" />
        </PostImages>
      </Link>
    </>
  );
}
