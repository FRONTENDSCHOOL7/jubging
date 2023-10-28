import React from "react";
import { useParams } from "react-router-dom";
import bear from "../../../assets/images/bear-face.svg";

import {
  ProfileLink,
  Image,
  Section,
  UserName,
  SubText,
} from "./UserListBoxStyle";

export default function UserListBox({ profileImage, userName, accountName }) {
  return (
    <ProfileLink to={`/profile/${accountName}`}>
      <Image $image={profileImage}></Image>
      <Section>
        {/* 기능 구현 시 변수로 교체 */}

        <UserName>{userName}</UserName>
        <SubText>{accountName}</SubText>
      </Section>
    </ProfileLink>
  );
}
