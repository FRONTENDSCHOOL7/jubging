import React from "react";
import styled from "styled-components";

import PostHeader from "./PostHeader/PostHeader";
import PostMain from "./PostMain/PostMain";
import PostFooter from "./PostFooter/NewsPostFooter";

function Posting(props) {
  return (
    <PostContainer>
      <PostHeader
        profilePhoto={props.profilePhoto}
        nickname={props.nickname}
        userId={props.userId}
      />
      <PostMain postImage={props.postImage} />
      <PostFooter
        postText={props.postText}
        likes={props.likes}
        postDate={props.postDate}
      />
      <DividingLine />
    </PostContainer>
  );
}

export const PostContainer = styled.div`
  margin-top: 25px;
`;

export const DividingLine = styled.div`
  height: 2px;
  width: 100%;
  margin-top: 25px;
  background-color: #d9d9d9;
`;

export default Posting;
