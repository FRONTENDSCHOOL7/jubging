import styled from "styled-components";

import HeaderContainer from "./HeaderContainer";
import BackButton from "../Button/BackButton";

export default function SearchHeader({ onChange }) {
  return (
    <HeaderContainer>
      <BackButton />
      <SearchBar type="text" placeholder="계정 검색" onChange={onChange} />
    </HeaderContainer>
  );
}

export const SearchBar = styled.input`
  width: 316px;
  height: 30px;
  border-radius: 32px;
  padding: 0 20px;
  background-color: #f2f2f2;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeHolderColor};
  }

  &:focus {
    outline: none;
  }
`;
