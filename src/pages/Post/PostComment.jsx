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
} from "./PostCommentStyle";
import MoreButton from "../../components/common/Button/MoreButton";

function PostComment({profilePhoto, nickname, minutesAgo, comment}) {
  return (
    <CommentGroup>
      <CommentHeaderGroup>
        <ProfileImage>
          <img src={profilePhoto} alt="프로필 사진" />
        </ProfileImage>
        <CommentInfoGroup>
          <InfoHeader>
            <InfoNickname>{nickname}</InfoNickname>
            <InfoTime>{minutesAgo} 분 전</InfoTime>
          </InfoHeader>
          <MoreButton />
        </CommentInfoGroup>
      </CommentHeaderGroup>
      <CommentText>{comment}</CommentText>
    </CommentGroup>
  );
}

export default PostComment;