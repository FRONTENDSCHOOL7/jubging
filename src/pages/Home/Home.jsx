import React from "react";
import Post from "../../components/Post/Post.jsx";
import PostHeader from "../../components/Post/PostHeader.jsx";
import PostMain from "../../components/Post/PostMain.jsx";
import PostFooter from "../../components/Post/PostFooter.jsx";

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Post
        profilePhoto="프로필 이미지 URL"
        nickname="다 줍는 착한 하영"
        userId="hangnik"
        postImage="게시글 이미지 URL"
        postText="게시글 내용"
        likes={0}
        comments={[]}
        postDate="2023-10-22"
      />
    </div>
  );
}

export default Home;