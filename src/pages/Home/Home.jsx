import React from "react";
import Post from "../../components/Post/Post.jsx";

function Home() {
  return (
    <div>
      <Post
        profilePhoto = "프로필 이미지 URL"
        nickname = "다 줍는 착한 하영"
        userId = "hangnik"
        postImage = "게시글 이미지 URL"
        postText = "게시글 내용"
        likes = {0}
        comments = {[]}
        postDate = "2023년 10월 22일"
      />
    </div>
  );
}

export default Home;