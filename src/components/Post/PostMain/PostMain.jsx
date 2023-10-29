import React from "react";
import { PostContainer, PostImages, PostText } from "./PostMainStyle";
import { Link } from "react-router-dom";

function PostMain({ postImage, postText, postId }) {
  return (
    <Link to={`/post/${postId}`}>
      <PostContainer>
        {postImage && (
          <PostImages>
            <img src={postImage} alt="게시글 이미지" />
          </PostImages>
        )}
        <PostText>{postText}</PostText>
      </PostContainer>
    </Link>
  );
}

export default PostMain;
