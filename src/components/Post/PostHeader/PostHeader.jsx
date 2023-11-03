import React, { useState } from "react";
import MoreButton from "../../common/Button/MoreButton";
import UserListBox from "../../common/UserList/UserListBox";
import { PostHeaderContaniner } from "./PostHeaderStyle";
import { AnotherfeedModal, FeedModal, Modal } from "../../common/Modal/Modal";
import { useRecoilValue } from "recoil";
import { userInfoAtom } from "../../../recoil/userAtom";

export default function PostHeader({
  profileImage,
  userName,
  accountName,
  pageName,
  postId,
}) {
  const userInfo = useRecoilValue(userInfoAtom);
  const [openModalId, setOpenModalId] = useState(null);

  // 모달
  const handleOpenModal = () => {
    setOpenModalId(postId);
  };

  const handleCloseModal = () => {
    setOpenModalId(null);
  };

  // 클릭 이벤트
  const modify = () => {
    console.log("수정");
  };

  const report = () => {
    console.log("신고");
  };
  return (
    <>
      <PostHeaderContaniner>
        <UserListBox
          profileImage={profileImage}
          userName={userName}
          accountName={accountName}
        />
        <MoreButton onClick={handleOpenModal} pageName={pageName} />
      </PostHeaderContaniner>

      {postId === openModalId && (
        <Modal onClose={handleCloseModal}>
          {userInfo.accountname === accountName ? (
            <FeedModal modify={modify} />
          ) : (
            <AnotherfeedModal report={report} />
          )}
        </Modal>
      )}
    </>
  );
}
