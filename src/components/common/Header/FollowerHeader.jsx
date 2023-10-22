import React from "react";
import HeaderContainer from "./HeaderContainer";
import BackButton from "../Button/BackButton";

export default function FollowerHeader() {
  return (
    <HeaderContainer>
      <BackButton />
      <h1>Followers</h1>
    </HeaderContainer>
  );
}
