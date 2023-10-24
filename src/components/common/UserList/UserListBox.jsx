import React from "react";
import bear from "../../../assets/images/bear-face.svg";
import {
  Contanier,
  Image,
  Section,
  UserName,
  SubText,
} from "./UserListBoxStyle";

export default function UserListBox() {
  return (
    <Contanier>
      <Image image={bear}></Image>
      <Section>
        {/* 기능 구현 시 변수로 교체 */}
        <UserName>사용자 이름</UserName>
        <SubText>추가적인 내용</SubText>
      </Section>
    </Contanier>
  );
}
