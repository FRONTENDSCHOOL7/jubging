import ReactDOM from "react-dom";
import ButtonContainer from "../Button/ButtonContainer";
import { AlertContainer, AlertBox, Message, ButtonWrraper } from "./AlertStyle";
import Button from "../Button/Button";

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
      <Button onClick={onClose} size="lg">
        취소
      </Button>
      <Button onClick={deleteFeed} size="lg">
        삭제
      </Button>
    </>
  );
}

export function AlertDeleteCourse({ onClose, deleteCourse }) {
  return (
    <>
      <Button onClick={onClose} size="lg">
        취소
      </Button>
      <Button onClick={deleteCourse} size="lg">
        삭제
      </Button>
    </>
  );
}

export function AlertLogout({ onClose, logout }) {
  return (
    <>
      <Button onClick={onClose} size="lg">
        취소
      </Button>
      <Button onClick={logout} size="lg">
        로그아웃
      </Button>
    </>
  );
}

export function AlertReport({ onClose }) {
  return (
    <>
      <Button onClick={onClose} size="lg">
        취소
      </Button>
      <Button onClick={onClose} size="lg">
        확인
      </Button>
    </>
  );
}

export function AlertChange({ onClose, onChange }) {
  return (
    <>
      <Button onClick={onClose} size="lg">
        취소
      </Button>
      <Button onClick={onChange} size="lg">
        확인
      </Button>
    </>
  );
}

export function AlertUploadMap({ onClose, upload }) {
  return (
    <>
      <Button onClick={onClose} size="lg">
        취소
      </Button>
      <Button onClick={upload} size="lg">
        확인
      </Button>
    </>
  );
}

export function AlertExitChat({ onClose, exit }) {
  return (
    <>
      <Button onClick={onClose} size="lg">
        취소
      </Button>
      <Button onClick={exit} size="lg">
        확인
      </Button>
    </>
  );
}
