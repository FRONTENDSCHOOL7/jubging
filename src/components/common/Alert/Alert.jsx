import ReactDOM from "react-dom";
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
      <Button type="button" onClick={onClose} size="lg">
        취소
      </Button>
      <Button type="button" onClick={deleteFeed} size="lg">
        삭제
      </Button>
    </>
  );
}

export function AlertDeleteCourse({ onClose, deleteCourse }) {
  return (
    <>
      <Button type="button" onClick={onClose} size="lg">
        취소
      </Button>
      <Button type="button" onClick={deleteCourse} size="lg">
        삭제
      </Button>
    </>
  );
}

export function AlertLogout({ onClose, logout }) {
  return (
    <>
      <Button type="button" onClick={onClose} size="lg">
        취소
      </Button>
      <Button type="button" onClick={logout} size="lg">
        로그아웃
      </Button>
    </>
  );
}

export function AlertReport({ onClose }) {
  return (
    <>
      <Button type="button" onClick={onClose} size="lg">
        취소
      </Button>
      <Button type="button" onClick={onClose} size="lg">
        확인
      </Button>
    </>
  );
}

export function AlertChange({ onClose, onChange }) {
  return (
    <>
      <Button type="button" onClick={onClose} size="lg">
        취소
      </Button>
      <Button type="button" onClick={onChange} size="lg">
        확인
      </Button>
    </>
  );
}

export function AlertUploadMap({ onClose, upload }) {
  return (
    <>
      <Button type="button" onClick={onClose} size="lg">
        취소
      </Button>
      <Button type="button" onClick={upload} size="lg">
        확인
      </Button>
    </>
  );
}

export function AlertExitChat({ onClose, exit }) {
  return (
    <>
      <Button type="button" onClick={onClose} size="lg">
        취소
      </Button>
      <Button type="button" onClick={exit} size="lg">
        확인
      </Button>
    </>
  );
}
