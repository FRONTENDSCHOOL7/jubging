import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useModal() {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

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

  // 경고창 -> 로그아웃
  const handleAlertOpenLogout = () => {
    setIsAlertOpen(true);
    setIsModalOpen(false);
  };

  // 경고창 -> 사용자 신고
  const handleReport = () => {
    setIsAlertOpen(true);
    setIsModalOpen(false);
  };

  // 경고창 -> 채팅방 나가기
  const handleAlertExit = () => {
    setIsAlertOpen(false);
    navigate(-1);
  };

  return {
    isModalOpen,
    isAlertOpen,
    handleOpenModal,
    handleCloseModal,
    handleOpenAlert,
    handleAlertClose,
    handleAlertOpenLogout,
    handleReport,
    handleAlertExit,
  };
}
