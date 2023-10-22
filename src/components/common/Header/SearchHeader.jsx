import React from "react";
import HeaderContainer from "./HeaderContainer";
import BackButton from "../Button/BackButton";
import styled from "styled-components";

export const SearchBar = styled.input`
  width: 316px;
  height: 30px;
  border-radius: 32px;
  padding: 0 20px;
  background-color: #f2f2f2;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeHolderColor};
  }
`;

export default function SearchHeader() {
  return (
    <HeaderContainer>
      <BackButton />
      <SearchBar type="text" placeholder="계정 검색" />
    </HeaderContainer>
  );
}
