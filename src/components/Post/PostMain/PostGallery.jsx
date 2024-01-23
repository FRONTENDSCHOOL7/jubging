import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PostImages } from "./PostMainStyle";

export default function PostGallery({ postId, postImage }) {
  return (
    <PostContainer>
      <Link to={`/post/${postId}`}>
        <PostImages>
          <img src={postImage} alt="게시글 이미지" />
        </PostImages>
      </Link>
    </PostContainer>
  );
}

const PostContainer = styled.article`
  &:hover {
    transform: scale(1.03);
    z-index: 10;
  }
  transition: all 0.1s ease-out;
`;
