import React from "react";
import styled from "styled-components";
import logo from "../../../assets/images/logo.svg";
import search from "../../../assets/icons/icon-search.svg";
import HeaderContainer from "./HeaderContainer";
import ButtonContainer from "../Button/ButtonContainer";
import { Link } from "react-router-dom";

export default function HomeHeader() {
  return (
    <HeaderContainer justisfy={"space-between"}>
      <Logo src={logo} />
      <Link to="/search">
        <ButtonContainer width={"50px"} bgColor={"#ffffff"}>
          <SearchIcon src={search} />
        </ButtonContainer>
      </Link>
    </HeaderContainer>
  );
}

const Logo = styled.img`
  width: 39px;
  height: 27px;
  margin-left: 15px;
`;

const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
`;
