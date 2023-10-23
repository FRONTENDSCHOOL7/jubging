import ButtonContainer from "../Button/ButtonContainer";
import { AlertContainer, ButtonWrraper, Message } from "./AlertOverayStyle";

export default function AlertOveray({ message }) {
  return (
    <AlertContainer>
      <Message>{message}</Message>
      <ButtonWrraper>
        <ButtonContainer width={"126px"} color={"#000000"}>
          취소
        </ButtonContainer>
        <ButtonContainer width={"126px"} color={"#41A6DE"}>
          삭제
        </ButtonContainer>
      </ButtonWrraper>
    </AlertContainer>
  );
}
