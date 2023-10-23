import styled from "styled-components";
import AlertOveray from "./AlertOveray";
import { useState } from "react";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.55);

  z-index: 999;
`;

export default function Alert() {
  // test 하고 싶으면 기본값 true로 변경
  const [isOpen, setIsOpen] = useState(true);

  const openAlertHandler = () => {
    setIsOpen(!isOpen);
  };

  return isOpen ? (
    <>
      <Backdrop onClick={openAlertHandler} />
      <AlertOveray />
    </>
  ) : null;
}
