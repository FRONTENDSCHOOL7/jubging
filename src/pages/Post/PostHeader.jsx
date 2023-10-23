import React from "react";
import {
  PostHeaderGroup,
  ProfilePhoto,
  ProfileLink,
  ProfileName,
  Nickname,
  MoreBtn,
  UserId,
} from "./PostHeaderStyle"; 

function PostHeader({ profilePhoto, nickname, userId }) {
  return (
    <PostHeaderGroup>
      <ProfileLink href="#">
        <ProfilePhoto>
          <img src={profilePhoto} alt="프로필 사진" />
        </ProfilePhoto>
        <ProfileName>
          <Nickname>{nickname}</Nickname>
          <UserId>{`@${userId}`}</UserId>
        </ProfileName>
      </ProfileLink>
      <MoreBtn></MoreBtn>
    </PostHeaderGroup>
  );
}

export default PostHeader;