import { Link } from "react-router-dom";
import styled from "styled-components";

import search from "../../../assets/icons/icon-search.svg";
import Button from "./Button";
import A11yHidden from "../A11yHidden/A11yHidden";

export default function SearchButton() {
  return (
    <Button size="sm" as={Link} to="/search">
      <A11yHidden>계정 검색</A11yHidden>
      <SearchIcon src={search} alt="검색 버튼" />
    </Button>
  );
}

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;
