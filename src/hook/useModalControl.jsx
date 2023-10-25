import React from "react";
import styled, { keyframes } from "styled-components";
import { useRecoilState } from "recoil";
import modalStateAtomFamily from "../recoil/modalStateAtom";

const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

const moveTop = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

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

  animation: ${fadeIn} 0.7s ease-in-out;
`;

const ModalContent = styled.div`
  position: fixed;
  bottom: 0;
  padding-top: 16px;

  background-color: white;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.15);
  animation: ${moveTop} 0.7s ease-in-out;
`;

export const ModalBar = styled.div`
  width: 50px;
  height: 4px;

  margin: 0 auto;
  margin-bottom: 16px;
  background-color: #dbdbdb;
  border-radius: 5px;
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
            <ModalContent>
              <ModalBar />
              {children}
            </ModalContent>
          </ModalContainer>
        )}
      </>
    );
  };
  return { openModal, ModalComponent };
}
