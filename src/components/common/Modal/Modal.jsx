import React from "react";
import { ModalBar, ModalBox } from "./ModalStyle";

export function Modal({ contents, handleFunc }) {
  return (
    <ModalBox>
      {/* <ModalBar /> */}
      <ul>
        {contents.map((item, index) => {
          return (
            <li key={index}>
              <button className="modalList" onClick={handleFunc}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </ModalBox>
  );
}
