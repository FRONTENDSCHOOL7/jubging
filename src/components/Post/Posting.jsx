import React from "react";
import PostHeader from "./PostHeader/PostHeader";
import PostMain from "./PostMain/PostMain";
import PostFooter from "./PostFooter/PostFooter";
import styled from "styled-components";

export const DividingLine = styled.div`
  height: 2px;
  width: 100%;
  margin: 24px 0 24px 0;
  background-color: #d9d9d9;
`;

function Posting(props) {
  return (
    <>
      <PostHeader
        profilePhoto={props.profilePhoto}
        nickname={props.nickname}
        userId={props.userId}
        pageName={props.pageName}
      />
      <PostMain postImage={props.postImage} />
      <PostFooter
        postText={props.postText}
        likes={props.likes}
        comments={props.comments}
        postDate={props.postDate}
      />
      <DividingLine />
    </>
  );
}

export default Posting;
