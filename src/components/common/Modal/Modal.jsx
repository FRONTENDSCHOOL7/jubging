import React from "react";
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

export function ProfileModal({ modify, logout }) {
  return (
    <ModalBox>
      <li className="modalList">
        <button onClick={modify}>수정</button>
        <button onClick={logout}>로그아웃</button>
      </li>
    </ModalBox>
  );
}

export function AnotherProfileModal({ report }) {
  return (
    <ModalBox>
      <li className="modalList">
        <button onClick={report}>신고</button>
      </li>
    </ModalBox>
  );
}

export function FeedModal({ modify }) {
  return (
    <ModalBox>
      <li className="modalList">
        <button onClick={modify}>수정</button>
      </li>
    </ModalBox>
  );
}
export function AnotherfeedModal({ report }) {
  return (
    <ModalBox>
      <li className="modalList">
        <button onClick={report}>신고</button>
      </li>
    </ModalBox>
  );
}
