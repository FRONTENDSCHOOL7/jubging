import ReactDOM from "react-dom";
import ButtonContainer from "../Button/ButtonContainer";
import {
  AlertContainer,
  AlertBox,
  Message,
  ButtonWrraper,
} from "./AlertStyled";

export function Alert({ isAlertOpen, onClose, children, message }) {
  if (isAlertOpen === false) {
    return null;
  }

  return ReactDOM.createPortal(
    <AlertContainer>
      <AlertBox>
        <Message>{message}</Message>
        <ButtonWrraper onClose={onClose}>{children}</ButtonWrraper>
      </AlertBox>
    </AlertContainer>,
    document.getElementById("alert-root")
  );
}

export function AlertDeleteFeed({ onClose, deleteFeed }) {
  return (
    <>
      <ButtonContainer onClick={onClose} width={"126px"} color={"#000000"}>
        취소
      </ButtonContainer>
      <ButtonContainer onClick={deleteFeed} width={"126px"} color={"#41A6DE"}>
        삭제
      </ButtonContainer>
    </>
  );
}

export function AlertDeleteCourse({ onClose, deleteCourse }) {
  return (
    <>
      <ButtonContainer onClick={onClose} width={"126px"} color={"#000000"}>
        취소
      </ButtonContainer>
      <ButtonContainer onClick={deleteCourse} width={"126px"} color={"#41A6DE"}>
        삭제
      </ButtonContainer>
    </>
  );
}

export function AlertLogout({ onClose, logout }) {
  return (
    <>
      <ButtonContainer onClick={onClose} width={"126px"} color={"#000000"}>
        취소
      </ButtonContainer>
      <ButtonContainer onClick={logout} width={"126px"} color={"#41A6DE"}>
        로그아웃
      </ButtonContainer>
    </>
  );
}

export function AlertReport({ onClose }) {
  return (
    <ButtonContainer color={"#41A6DE"} width={"252px"} onClick={onClose}>
      확인
    </ButtonContainer>
  );
}
export function AlertChange({ onChange }) {
  return (
    <ButtonContainer color={"#41A6DE"} width={"252px"} onClick={onChange}>
      확인
    </ButtonContainer>
  );
}

export function AlertUploadMap({ cansle, upload }) {
  return (
    <>
      <ButtonContainer width={"126px"} color={"#000000"} onClick={cansle}>
        취소
      </ButtonContainer>
      <ButtonContainer width={"126px"} color={"#41A6DE"} onClick={upload}>
        확인
      </ButtonContainer>
    </>
  );
}
