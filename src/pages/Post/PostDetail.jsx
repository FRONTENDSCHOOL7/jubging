import React from "react";
import PostComment from "./PostComment";

function PostDetail(props) {
  return (
    <>
      <PostComment 
          profileImage = {props.profilePhoto}
          nickname =  {props.nickname}
          minutesAgo={props.minutesAgo}
          comment = {props.comments}
      />
    </>
  );
}

export default PostDetail;