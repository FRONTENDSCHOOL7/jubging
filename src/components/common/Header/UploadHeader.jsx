import React from "react";
import HeaderContainer from "./HeaderContainer";
import BackButton from "../Button/BackButton";
import ButtonContainer from "../Button/ButtonContainer";

export default function UploadHeader() {
  return (
    <HeaderContainer justisfy={"space-between"}>
      <BackButton />
      <ButtonContainer width={"90px"} height={"32px"} rmargin={"12px"}>
        저장
      </ButtonContainer>
    </HeaderContainer>
  );
}
