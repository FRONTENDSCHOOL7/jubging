import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderContainer from "./HeaderContainer";
import BackButton from "../Button/BackButton";
import MoreButton from "../Button/MoreButton";
import styled from "styled-components";

import { Alert, AlertExitChat } from "../Alert/Alert";
import { Modal, ExitChat } from "../Modal/Modal";

export default function ChatRoomHeader(props) {
  const navigate = useNavigate();

  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenAlert = () => {
    setIsAlertOpen(true);
    setIsModalOpen(false);
  };

  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  const handleAlertExit = () => {
    setIsAlertOpen(false);
    navigate(-1);
  };
  return (
    <>
      <HeaderContainer justisfy={"space-between"}>
        <Section>
          <BackButton />
          <UserName>다 버리는 동주</UserName>
        </Section>
        <MoreButton onClick={handleOpenModal} />
      </HeaderContainer>

      {/* 모달 */}
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <ExitChat exit={handleOpenAlert}></ExitChat>
        </Modal>
      )}

      {/* 경고창 */}
      {isAlertOpen && (
        <Alert message="채팅방을 나가시겠습니까?">
          <AlertExitChat
            onClose={handleAlertClose}
            exit={handleAlertExit}
          ></AlertExitChat>
        </Alert>
      )}
    </>
  );
}

export const Section = styled.section`
  display: flex;
  align-items: center;
`;

export const UserName = styled.h2`
  font-size: ${(props) => props.theme.fontSize.medium};
`;
