import React from "react";
import {
  CommentGroup,
  CommentHeaderGroup,
  ProfileImage,
  CommentInfoGroup,
  InfoHeader,
  InfoNickname,
  InfoTime,
  CommentText,
  MoreBtn
} from "./PostCommentStyle";

function PostComment({profileImage, nickname, minutesAgo, comment}) {
  return (
    <CommentGroup>
      <CommentHeaderGroup>
        <ProfileImage src={profileImage} alt="Profile" />
        <CommentInfoGroup>
          <InfoHeader>
            <InfoNickname>{nickname}</InfoNickname>
            <InfoTime>{minutesAgo} 분 전</InfoTime>
          </InfoHeader>
          <MoreBtn></MoreBtn>
        </CommentInfoGroup>
      </CommentHeaderGroup>
      <CommentText>{comment}</CommentText>
    </CommentGroup>
  );
}

export default PostComment;