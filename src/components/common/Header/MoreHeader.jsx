import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { userInfoAtom } from "../../../recoil/userAtom";
import { loginAtom } from "../../../recoil/loginAtom";
import { useResetRecoilState } from "recoil";
import HeaderContainer from "./HeaderContainer";
import BackButton from "../Button/BackButton";
import MoreButton from "../Button/MoreButton";
import { AnotherProfileModal, Modal, ProfileModal } from "../Modal/Modal";

export default function MoreHeader({ userInfo, pageName }) {
  const { accountname } = useParams();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const resetUserInfo = useResetRecoilState(userInfoAtom);
  const resetLogin = useResetRecoilState(loginAtom);

  // 모달
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // 클릭 이벤트
  // 수정
  const modify = () => {
    navigate(`/profile/${accountname}/edit`);
  };

  // 로그아웃
  const logout = () => {
    localStorage.removeItem("token");
    resetUserInfo();
    resetLogin();
    navigate("/login");
  };

  const report = () => {
    console.log("신고");
  };

  return (
    <>
      <HeaderContainer justisfy={"space-between"}>
        <BackButton />
        <MoreButton pageName={pageName} onClick={handleOpenModal} />
      </HeaderContainer>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {accountname === userInfo.accountname ? (
          <ProfileModal modify={modify} logout={logout} />
        ) : (
          <AnotherProfileModal report={report} />
        )}
      </Modal>
    </>
  );
}
