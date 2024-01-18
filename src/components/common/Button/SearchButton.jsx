import { Link } from "react-router-dom";
import styled from "styled-components";

import search from "../../../assets/icons/icon-search.svg";
import Button from "./Button";

export default function SearchButton() {
  return (
    <Button size="sm" as={Link} to="/search">
      <SearchIcon src={search} alt="검색 버튼" />
    </Button>
  );
}

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;
