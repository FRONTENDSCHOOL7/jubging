import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCourseDelete, reportPost } from "../../api/postAPI";
import { userInfoAtom } from "../../recoil/userAtom";
import { useRecoilValue } from "recoil";

import {
  Title,
  CourseDetailHeaderStyle,
  UsernameBox,
  TitleBox,
} from "./CourseDetailHeaderStyle";

import MoreButton from "../common/Button/MoreButton";
import { AnotherfeedModal, Modal, FeedModal } from "../common/Modal/Modal";
import { Alert, AlertDeleteFeed } from "../common/Alert/Alert";

export default function CourseDetailHeader({
  courseId,
  accountName,
  // postData,
  // postId,
  product,
}) {
  console.log("accountName :", accountName);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const userInfo = useRecoilValue(userInfoAtom);

  const [openModalId, setOpenModalId] = useState(null);
  const [openAlertId, setOpenAlertId] = useState(null);

  // 모달
  const handleOpenModal = () => {
    setOpenModalId(courseId);
  };

  const handleCloseModal = () => {
    setOpenModalId(null);
  };

  // 경고창
  const handleAlertOpen = () => {
    setOpenAlertId(courseId);
    setOpenModalId(false);
  };

  const handleAlertClose = () => {
    setOpenAlertId(null);
  };

  // 코스 수정 클릭이벤트
  const handleEditPost = () => {
    // navigate(`/product/${courseId}/edit`, {
    //   state: { postData },
    // });
  };

  // 게시글 신고 클릭 이벤트
  const handleReport = async () => {
    // try {
    //   const response = await reportPost(token, postId);
    //   handleAlertOpen();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  console.log(courseId);

  // 코스 삭제 클릭이벤트
  const handleDeleteCourse = async () => {
    try {
      const response = await getCourseDelete(courseId);
      handleAlertClose();
      navigate(`/home`); // url 수정 예정
      console.log("course:", courseId);
      console.log("repose".response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Title>
        <CourseDetailHeaderStyle>
          <UsernameBox>{product.author.username} 님 만의</UsernameBox>
          <TitleBox>{product.itemName} 플로깅 코스</TitleBox>
        </CourseDetailHeaderStyle>
        <MoreButton onClick={handleOpenModal} />
      </Title>
      {/* 모달 */}
      {courseId === openModalId && (
        <Modal onClose={handleCloseModal}>
          {userInfo.accountname === product.author.accountname ? (
            <FeedModal modify={handleEditPost} deleteFeed={handleAlertOpen} />
          ) : (
            <AnotherfeedModal report={handleReport} />
          )}
        </Modal>
      )}
      {/* 경고창 */}
      {courseId === openAlertId && (
        <Alert message="게시글을 삭제할까요?">
          <AlertDeleteFeed
            deleteFeed={handleDeleteCourse}
            onClose={handleAlertClose}
          />
        </Alert>
      )}
    </>
  );
}
