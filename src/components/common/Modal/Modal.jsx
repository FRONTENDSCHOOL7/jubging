import ReactDOM from "react-dom";

import {
  ModalBackground,
  ModalBar,
  ModalContent,
  ModalBox,
} from "./ModalStyle";

export function Modal({ isOpen, children, onClose }) {
  if (isOpen === false) {
    return null;
  }

  return ReactDOM.createPortal(
    <ModalBackground onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalBar />
        {children}
      </ModalContent>
    </ModalBackground>,
    document.getElementById("modal-root")
  );
}

export function ProfileModal({ modify, openLogout }) {
  return (
    <ModalBox>
      <li className="modalList">
        <button type="button" onClick={modify}>
          프로필 수정
        </button>
        <button type="button" onClick={openLogout}>
          로그아웃
        </button>
      </li>
    </ModalBox>
  );
}

export function AnotherProfileModal({ report }) {
  return (
    <ModalBox>
      <li className="modalList">
        <button type="button" onClick={report}>
          신고
        </button>
      </li>
    </ModalBox>
  );
}

export function FeedModal({ modify, deleteFeed }) {
  return (
    <ModalBox>
      <li className="modalList">
        <button type="button" onClick={modify}>
          수정
        </button>
        <button type="button" onClick={deleteFeed}>
          삭제
        </button>
      </li>
    </ModalBox>
  );
}

export function AnotherfeedModal({ report }) {
  return (
    <ModalBox>
      <li className="modalList">
        <button type="button" onClick={report}>
          신고
        </button>
      </li>
    </ModalBox>
  );
}

export function CommentModal({ modify, deleteFeed }) {
  return (
    <ModalBox>
      <li className="modalList">
        <button type="button" onClick={modify}>
          삭제
        </button>
      </li>
    </ModalBox>
  );
}

export function ExitChat({ exit }) {
  return (
    <ModalBox>
      <li className="modalList">
        <button type="button" onClick={exit}>
          채팅방 나가기
        </button>
      </li>
    </ModalBox>
  );
}
