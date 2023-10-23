import React from "react";
import PostHeader from "./PostHeader";
import PostMain from "./PostMain";
import PostFooter from "./PostFooter";

function Post(props) {
  return (
    <>
      <PostHeader
        profilePhoto = {props.profilePhoto}
        nickname = {props.nickname}
        userId = {props.userId}
      />
      <PostMain postImage = {props.postImage} />
      <PostFooter
        postText = {props.postText}
        likes = {props.likes}
        comments = {props.comments}
        postDate = {props.postDate}
      />
    </>
  );
}

export default Post;