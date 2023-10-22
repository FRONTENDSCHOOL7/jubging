import React from "react";
import HeaderContainer from "./HeaderContainer";
import BackButton from "../Button/BackButton";

export default function FollowingHeader() {
  return (
    <HeaderContainer>
      <BackButton />
      <h1>Followings</h1>
    </HeaderContainer>
  );
}
