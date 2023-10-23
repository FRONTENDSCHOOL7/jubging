import React from "react";
import bear from "../../../assets/images/bear-face.svg";
import {
  Contanier,
  Image,
  Section,
  UserName,
  SubText,
} from "./UserListBoxStyle";
import ButtonContainer from "../Button/ButtonContainer";

export default function UserListBox() {
  return (
    <Contanier>
      <Image image={bear}></Image>
      <Section>
        {/* 기능 구현 시 변수로 교체 */}
        <UserName>사용자 이름</UserName>
        <SubText>추가적인 내용</SubText>
      </Section>

      {/* 검색, 팔로우 목록 조건부 렌더링 예정 */}
      {/* children 팔로우 여부에 따른 조건부 렌더링 */}
      <ButtonContainer width={"65px"} height={"28px"} bgColor={"#40A6DE"}>
        팔로우
      </ButtonContainer>
    </Contanier>
  );
}
