import React from "react";
import {
  NLHeaderGroup,
  ProfilePhoto,
  ProfileLink,
  ProfileName,
  Nickname,
  UserId,
} from "./NewsLetterHeaderStyle"; 
import MoreButton from './../../components/common/Button/MoreButton';

function NewsLetterHeader({ profilePhoto, nickname, userId }) {
  return (
    <NLHeaderGroup>
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
    </NLHeaderGroup>
  );
}

export default NewsLetterHeader;