import React from "react";
import { AlertContainer, ButtonWrraper, Message } from "./AlertOverayStyle";
import ButtonContainer from "../Button/ButtonContainer";

export default function LogoutAlertOveray() {
  return (
    <AlertContainer>
      <Message>로그아웃 하시겠어요?</Message>
      <ButtonWrraper>
        <ButtonContainer width={"126px"} color={"#000000"}>
          취소
        </ButtonContainer>
        <ButtonContainer width={"126px"} color={"#41A6DE"}>
          로그아웃
        </ButtonContainer>
      </ButtonWrraper>
    </AlertContainer>
  );
}
