import React from "react";
import Post from "../Post/Post";
import profileImage from "../../assets/images/rabbit-face.svg";

function HomePosting() {
  return (
    <div>
      <Post
        profilePhoto = {profileImage}
        nickname = "다 줍는 착한 하영"
        userId = "hangnik"
        postImage = "게시글 이미지 URL"
        postText = "게시글 내용"
        likes = {0}
        comments = {["나는 카피 맨 ~"]}
        postDate = "2023년 10월 22일"
        minutesAgo = {5}
      />
    </div>
  );
}

export default HomePosting;