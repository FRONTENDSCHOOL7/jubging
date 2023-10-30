import React from "react";
import HeaderContainer from "./HeaderContainer";
import BackButton from "../Button/BackButton";
import ButtonContainer from "../Button/ButtonContainer";

export default function UploadHeader({ type, isD }) {
  return (
    <HeaderContainer justisfy={"space-between"}>
      <BackButton />
      <ButtonContainer
        type={type}
        width={"90px"}
        height={"32px"}
        rmargin={"12px"}
      >
        저장
      </ButtonContainer>
    </HeaderContainer>
  );
}
