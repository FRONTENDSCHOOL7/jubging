import React from "react";
import back from "../../../assets/icons/icon-arrow-left.svg";
import ButtonContainer from "./ButtonContainer";
import { useNavigate } from "react-router-dom";
import { BackIcon } from "./BackButtonStyle";

export default function BackButton() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <ButtonContainer width={"50px"} bgColor={"#ffffff"} onClick={goBack}>
      <BackIcon src={back} />
    </ButtonContainer>
  );
}
