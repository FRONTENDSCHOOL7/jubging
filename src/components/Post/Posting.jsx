import React from "react";
import PostHeader from "./PostHeader/PostHeader";
import PostMain from "./PostMain/PostMain";
import PostFooter from "./PostFooter/PostFooter";
import styled from "styled-components";

function Posting({ posts }) {
  return posts.map((post) => (
    <PostContainer key={post.id}>
      <PostHeader
        profileImage={post.author.image}
        userName={post.author.username}
        accountName={post.author.accountname}
      />
      <PostMain postImage={post.image} postText={post.content} />
      <PostFooter
        likes={post.heartCount}
        comments={post.comments.length}
        postDate={post.createdAt}
      />
    </PostContainer>
  ));
}

const PostContainer = styled.article`
  margin-top: 25px;
  border-bottom: 1px solid #d9d9d9;
`;

export default Posting;
