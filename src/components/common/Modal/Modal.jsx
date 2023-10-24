import React from "react";
import { ModalBar, ModalBox } from "./ModalStyle";

export function Modal({ contents, handleFunc }) {
  return (
    <ModalBox>
      <ModalBar />
      <ul>
        <li>수정</li>
        <li>삭제</li>
      </ul>
    </ModalBox>
  );
}
