import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { deletePost, reportPost } from "../../../api/postAPI";

import { userInfoAtom } from "../../../recoil/userAtom";
import { useRecoilValue } from "recoil";

import MoreButton from "../../common/Button/MoreButton";
import UserListBox from "../../UserList/UserListBox";
import { PostHeaderContaniner } from "./PostHeaderStyle";
import { AnotherfeedModal, FeedModal, Modal } from "../../common/Modal/Modal";
import { Alert, AlertDeleteFeed, AlertReport } from "../../common/Alert/Alert";

export default function PostHeader({
  postData,
  profileImage,
  userName,
  accountName,
  pageName,
  postId,
  fetch,
}) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const userInfo = useRecoilValue(userInfoAtom);

  const [openModalId, setOpenModalId] = useState(null);
  const [openAlertId, setOpenAlertId] = useState(null);

  // 모달
  const handleOpenModal = () => {
    setOpenModalId(postId);
  };

  const handleCloseModal = () => {
    setOpenModalId(null);
  };

  // 경고창
  const handleAlertOpen = () => {
    setOpenAlertId(postId);
    setOpenModalId(false);
  };

  const handleAlertClose = () => {
    setOpenAlertId(null);
  };

  // 게시글 수정 클릭이벤트
  const handleEditPost = () => {
    navigate(`/post/${postId}/edit`, {
      state: { postData },
    });
  };

  // 게시글 삭제 클릭이벤트
  const handleDeletePost = async () => {
    try {
      const response = await deletePost(token, postId);
      handleAlertClose();
      navigate(`/profile/${accountName}`);
      fetch();
    } catch (error) {
      console.log(error);
    }
  };

  // 게시글 신고 클릭 이벤트
  const handleReport = async () => {
    try {
      const response = await reportPost(token, postId);
      handleAlertOpen();
    } catch (error) {
      console.log(error);
    }
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

      {/* 모달 */}
      {postId === openModalId && (
        <Modal onClose={handleCloseModal}>
          {userInfo.accountname === accountName ? (
            <FeedModal modify={handleEditPost} deleteFeed={handleAlertOpen} />
          ) : (
            <AnotherfeedModal report={handleReport} />
          )}
        </Modal>
      )}

      {/* 경고창 */}
      {postId === openAlertId &&
        (userInfo.accountname === accountName ? (
          <Alert message="게시글을 삭제할까요?">
            <AlertDeleteFeed
              deleteFeed={handleDeletePost}
              onClose={handleAlertClose}
            />
          </Alert>
        ) : (
          <Alert message="신고되었습니다.">
            <AlertReport onClose={handleAlertClose} />
          </Alert>
        ))}
    </>
  );
}
