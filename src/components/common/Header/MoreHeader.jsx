import React from "react";
import HeaderContainer from "./HeaderContainer";
import BackButton from "../Button/BackButton";
import MoreButton from "../Button/MoreButton";

export default function MoreHeader() {
  return (
    <HeaderContainer justisfy={"space-between"}>
      <BackButton />
      <MoreButton />
    </HeaderContainer>
  );
}