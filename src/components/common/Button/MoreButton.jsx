import React from "react";
import ButtonContainer from "./ButtonContainer";
import more from "../../../assets/icons/icon-more-vertical.svg";
import { MoreIcon } from "./MoreButtonStyle";
import useModalControl from "../../../hook/useModalControl";

export default function MoreButton({ onClick, pageName }) {
  const { openModal } = useModalControl(pageName);
  const handleClick = onClick || openModal;
  return (
    <ButtonContainer
      onClick={handleClick}
      width={"50px"}
      height={"50px"}
      bgColor={"#ffffff"}
    >
      <MoreIcon src={more} />
    </ButtonContainer>
  );
}
