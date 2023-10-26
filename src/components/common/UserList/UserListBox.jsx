import React from "react";
import { useLocation, useParams } from "react-router-dom";
import bear from "../../../assets/images/bear-face.svg";

import {
  ProfileLink,
  Image,
  Section,
  UserName,
  SubText,
} from "./UserListBoxStyle";

export default function UserListBox() {
  const { accountname } = useParams();

  return (
    <ProfileLink to={`/profile/${accountname}`}>
      <Image $image={bear}></Image>
      <Section>
        {/* 기능 구현 시 변수로 교체 */}

        <UserName>사용자 이름</UserName>
        <SubText>id태그</SubText>
      </Section>
    </ProfileLink>
  );
}
