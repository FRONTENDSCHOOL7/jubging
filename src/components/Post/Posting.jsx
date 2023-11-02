import React from "react";
import PostHeader from "./PostHeader/PostHeader";
import PostMain from "./PostMain/PostMain";
import PostFooter from "./PostFooter/PostFooter";
import styled from "styled-components";

function Posting({
  accountName,
  profileImage,
  userName,
  postImage,
  postText,
  postId,
  heartCount,
  commentCount,
  postDate,
  hearted,
}) {
  return (
    <PostContainer>
      <PostHeader
        profileImage={profileImage}
        userName={userName}
        accountName={accountName}
      />
      <PostMain postImage={postImage} postText={postText} postId={postId} />
      <PostFooter
        heartCount={heartCount}
        hearted={hearted}
        commentCount={commentCount}
        postDate={postDate}
        postId={postId}
      />
    </PostContainer>
  );
}

const PostContainer = styled.article`
  margin-top: 25px;
  border-bottom: 1px solid #d9d9d9;
`;

export default Posting;
