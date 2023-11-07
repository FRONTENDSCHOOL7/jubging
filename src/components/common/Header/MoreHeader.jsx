import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { userInfoAtom } from "../../../recoil/userAtom";
import { loginAtom } from "../../../recoil/loginAtom";
import { useResetRecoilState } from "recoil";

import { Alert, AlertLogout } from "../Alert/Alert";
import { AnotherProfileModal, Modal, ProfileModal } from "../Modal/Modal";
import HeaderContainer from "./HeaderContainer";
import BackButton from "../Button/BackButton";
import MoreButton from "../Button/MoreButton";

import { AnotherProfileModal, Modal, ProfileModal } from "../Modal/Modal";
import { Alert, AlertLogout, AlertReport } from "../Alert/Alert";

export default function MoreHeader({ userInfo, pageName }) {
  const navigate = useNavigate();
  const { accountname } = useParams();

  const resetUserInfo = useResetRecoilState(userInfoAtom);
  const resetLogin = useResetRecoilState(loginAtom);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

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

  // 경고창 -> 사용자 신고
  const handleReport = () => {
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
    navigate("/");
  };

  // 신고하기

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
      {isAlertOpen &&
        (userInfo.accountname === accountname ? (
          <Alert isAlertOpen={isAlertOpen} message="로그아웃 하시겠어요?">
            <AlertLogout logout={handleLogout} onClose={handleAlertClose} />
          </Alert>
        ) : (
          <Alert message={`${accountname}님이 신고되었습니다.`}>
            <AlertReport onClose={handleAlertClose} />
          </Alert>
        ))}
    </>
  );
}
