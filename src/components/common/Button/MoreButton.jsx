import React from "react";
import ButtonContainer from "./ButtonContainer";
import more from "../../../assets/icons/icon-more-vertical.svg";
import { MoreIcon } from "./MoreButtonStyle";
import useModalControl from "../../../hook/useModalControl";

export default function MoreButton(props) {
  const { openModal } = useModalControl(props.pageName);
  return (
    <ButtonContainer
      onClick={openModal}
      width={"50px"}
      height={"0"}
      bgColor={"#ffffff"}
    >
      <MoreIcon src={more} />
    </ButtonContainer>
  );
}
