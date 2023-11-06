// react
import React, { useState } from "react";

// API
import { deleteComment, reportComment } from "../../api/commentAPI";

// atom
import { userInfoAtom } from "../../recoil/userAtom";

// recoil
import { useRecoilValue } from "recoil";
import useModalControl from "../../hook/useModalControl";

// components
import {
  CommentGroup,
  CommentHeaderGroup,
  ProfileImage,
  CommentInfoGroup,
  InfoHeader,
  InfoNickname,
  InfoTime,
  CommentText,
} from "./PostCommentStyle";
import MoreButton from "../../components/common/Button/MoreButton";

import { Alert, AlertReport } from "../../components/common/Alert/Alert"

import { Modal, FeedModal, AnotherfeedModal } from "../../components/common/Modal/Modal";

function PostComment({ profilePhoto, nickname, comment, refreshComments, postId }) {

  const handleDeleteAndCloseModal = () => {
    handleDelete();
    closeModal();
  }

  const { ModalComponent, openModal, closeModal } = useModalControl(`comment-${comment.id}`);
  const userInfo = useRecoilValue(userInfoAtom) || {};
  

  const handleDelete = async () => {
    console.log("handleDelete called");
    console.log("postId:", postId);
    console.log("commentID:", comment.id);
    try {
      await deleteComment(postId, comment.id);
      console.log("Deleted successfully");
      refreshComments();
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };

  const [isReportAlertOpen, setReportAlertOpen] = useState(false);
  
  const handleReport = async () => {
    console.log("Reporting comment");
    try {
      await reportComment(postId, comment.id);
      setReportAlertOpen(true)
    } catch (error) {
      console.error("Failed to report comment:", error);
    }
  };

  return (
    <CommentGroup>
      <ProfileImage>
        <img src={profilePhoto} alt="프로필 사진" />
      </ProfileImage>

      <CommentHeaderGroup>
        <CommentInfoGroup>
          <InfoHeader>
            <InfoNickname>{nickname}</InfoNickname>
            <InfoTime>1분 전</InfoTime>
          </InfoHeader>
          <CommentText>{comment.content}</CommentText>
        </CommentInfoGroup>
  
        <MoreButton pageName={`comment-${comment.id}`} onClick={openModal} />
        <ModalComponent>
          {userInfo.accountname === comment.author.accountname ? (
            <FeedModal modify={handleDeleteAndCloseModal} deleteFeed={closeModal} />
          ) : (
            <AnotherfeedModal report={handleReport} />
          )}
        </ModalComponent>
  
        <Alert
          isAlertOpen={isReportAlertOpen}
          onClose={() => setReportAlertOpen(false)}
          message="신고되었습니다."
        >
          <AlertReport onClose={() => setReportAlertOpen(false)} />
        </Alert>
      </CommentHeaderGroup>
    </CommentGroup>
  );
}

export default PostComment;
