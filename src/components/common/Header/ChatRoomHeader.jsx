import React from "react";
import HeaderContainer from "./HeaderContainer";
import BackButton from "../Button/BackButton";
import MoreButton from "../Button/MoreButton";
import styled from "styled-components";

export default function ChatRoomHeader(props) {
  return (
    <HeaderContainer justisfy={"space-between"}>
      <Section>
        <BackButton />
        <UserName>다 버리는 동주</UserName>
      </Section>
      <MoreButton pageName={props.pageName} />
    </HeaderContainer>
  );
}

export const Section = styled.section`
  display: flex;
  align-items: center;
`;

export const UserName = styled.h2`
  font-size: ${(props) => props.theme.fontSize.medium};
`;
