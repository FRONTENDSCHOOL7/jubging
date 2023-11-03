import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { userInfoAtom } from "../../../recoil/userAtom";
import { loginAtom } from "../../../recoil/loginAtom";
import { useResetRecoilState } from "recoil";
import HeaderContainer from "./HeaderContainer";
import BackButton from "../Button/BackButton";
import MoreButton from "../Button/MoreButton";
import { AnotherProfileModal, Modal, ProfileModal } from "../Modal/Modal";
import { Alert, AlertLogout } from "../Alert/Alert";

export default function MoreHeader({ userInfo, pageName }) {
  const { accountname } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const resetUserInfo = useResetRecoilState(userInfoAtom);
  const resetLogin = useResetRecoilState(loginAtom);

  // 모달
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 경고창 -> 로그아웃
  const handleAlertOpenLogout = () => {
    setIsAlertOpen(true);
    setIsModalOpen(false);
  };
  const handleAlertClose = () => {
    setIsAlertOpen(false);
  };

  // 클릭 이벤트
  // 수정
  const handleModify = () => {
    navigate(`/profile/${accountname}/edit`);
  };

  // 로그아웃
  const handleLogout = () => {
    localStorage.removeItem("token");
    resetUserInfo();
    resetLogin();
    navigate("/login");
  };

  // 신고하기
  const handleReport = () => {
    console.log("신고");
  };

  return (
    <>
      <HeaderContainer justisfy={"space-between"}>
        <BackButton />
        <MoreButton pageName={pageName} onClick={handleOpenModal} />
      </HeaderContainer>

      {/* 모달 */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {accountname === userInfo.accountname ? (
          <ProfileModal
            modify={handleModify}
            openLogout={handleAlertOpenLogout}
          />
        ) : (
          <AnotherProfileModal report={handleReport} />
        )}
      </Modal>

      {/* 경고창 */}
      <Alert isAlertOpen={isAlertOpen} message="로그아웃하시겠어요?">
        <AlertLogout logout={handleLogout} onClose={handleAlertClose} />
      </Alert>
    </>
  );
}
