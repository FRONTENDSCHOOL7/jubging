import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import modalStateAtomFamily from "../recoil/modalStateAtom";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
`;

export default function useModalControl(pageName) {
  const [modalState, setModalState] = useRecoilState(
    modalStateAtomFamily(pageName)
  );

  const openModal = () => {
    setModalState(true);
    console.log(modalState);
  };
  const closeModal = () => {
    setModalState(false);
  };

  const ModalComponent = ({ children }) => {
    return (
      <>
        {modalState && (
          <ModalContainer onClick={closeModal}>
            <ModalContent>{children}</ModalContent>
          </ModalContainer>
        )}
      </>
    );
  };
  return { openModal, ModalComponent };
}
