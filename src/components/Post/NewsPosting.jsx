import React from "react";
import styled from "styled-components";

import PostHeader from "./PostHeader/PostHeader";
import PostMain from "./PostMain/PostMain";
import NewsPostFooter from "./PostFooter/NewsPostFooter";

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
      <NewsPostFooter
        heartCount={heartCount}
        postDate={postDate}
        postId={postId}
      />
    </PostContainer>
  );
}

export const PostContainer = styled.div`
  margin-top: 25px;
  border-bottom: 1px solid #d9d9d9;
`;

export default Posting;
