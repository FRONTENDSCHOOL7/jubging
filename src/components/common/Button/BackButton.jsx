import React from "react";
import back from "../../../assets/icons/icon-arrow-left.svg";
import ButtonContainer from "./ButtonContainer";
import { BackIcon } from "./BackButtonStyle";

export default function BackButton() {
  return (
    <ButtonContainer width={"50px"} $bgColor={"#ffffff"}>
      <BackIcon src={back} />
    </ButtonContainer>
  );
}
