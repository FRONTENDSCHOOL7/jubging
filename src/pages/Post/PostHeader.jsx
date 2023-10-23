import React from "react";
import {
  PostHeaderGroup,
  ProfilePhoto,
  ProfileLink,
  ProfileName,
  Nickname,
  UserId,
} from "./PostHeaderStyle"; 
import MoreButton from './../../components/common/Button/MoreButton';

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
      <MoreButton />
    </PostHeaderGroup>
  );
}

export default PostHeader;