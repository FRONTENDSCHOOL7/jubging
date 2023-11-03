import React from "react";
import ButtonContainer from "./ButtonContainer";
import more from "../../../assets/icons/icon-more-vertical.svg";
import { MoreIcon } from "./MoreButtonStyle";

export default function MoreButton({ onClick }) {
  return (
    <ButtonContainer
      onClick={onClick}
      width={"50px"}
      height={"50px"}
      bgColor={"#ffffff"}
    >
      <MoreIcon src={more} />
    </ButtonContainer>
  );
}
