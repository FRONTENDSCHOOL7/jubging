import React from "react";
import PostComment from "./PostComment";
import profileImage from "../../assets/images/bear-face.svg";

function PostDetail() {
  return (
    <>
      <PostComment 
          profilePhoto = {profileImage}
          nickname = "항상 도움을 주시는 재웅"
          minutesAgo = "5"
          comment = {["나는 카피 맨 ~"]}
      />
    </>
  );
}

export default PostDetail;