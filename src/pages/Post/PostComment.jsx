// react
import { useState } from "react";
import { Link } from "react-router-dom";

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
import { Alert, AlertReport } from "../../components/common/Alert/Alert";

import {
  AnotherfeedModal,
  CommentModal,
} from "../../components/common/Modal/Modal";

function PostComment({
  profilePhoto,
  nickname,
  comment,
  refreshComments,
  postId,
  commentData,
}) {
  const userInfo = useRecoilValue(userInfoAtom) || {};
  const [isReportAlertOpen, setReportAlertOpen] = useState(false);

  const { ModalComponent, openModal, closeModal } = useModalControl(
    `comment-${comment.id}`
  );

  const calculateTimeAgo = (date) => {
    const commentTime = new Date(date);
    const currentTime = new Date();
    const diffSeconds = Math.floor((currentTime - commentTime) / 1000);

    if (diffSeconds < 60) {
      return `${diffSeconds}초 전`;
    } else if (diffSeconds < 3600) {
      return `${Math.floor(diffSeconds / 60)}분 전`;
    } else if (diffSeconds < 86400) {
      return `${Math.floor(diffSeconds / 3600)}시간 전`;
    } else {
      return `${Math.floor(diffSeconds / 86400)}일 전`;
    }
  };

  const commentTimeAgo = calculateTimeAgo(commentData);

  const handleDeleteAndCloseModal = () => {
    handleDelete();
    closeModal();
  };

  // 댓글 삭제
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

  // 댓글 신고
  const handleReport = async () => {
    console.log("Reporting comment");
    try {
      await reportComment(postId, comment.id);
      setReportAlertOpen(true);
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
            <InfoTime>{commentTimeAgo}</InfoTime>
          </InfoHeader>
          <CommentText>{comment.content}</CommentText>
        </CommentInfoGroup>

        <MoreButton pageName={`comment-${comment.id}`} onClick={openModal} />
        <ModalComponent>
          {userInfo.accountname === comment.author.accountname ? (
            <CommentModal
              modify={handleDeleteAndCloseModal}
              deleteFeed={closeModal}
            />
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
