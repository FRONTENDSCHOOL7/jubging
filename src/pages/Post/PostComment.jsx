// react
import React from "react";

// API
import { deleteComment } from "../../api/commentAPI";

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

import { Modal } from "../../components/common/Modal/Modal";

function PostComment({ profilePhoto, nickname, minutesAgo, comment, refreshComments }) {

  const { ModalComponent } = useModalControl(`comment-${comment.id}`);
  const userInfo = useRecoilValue(userInfoAtom) || {};
  

  const handleDelete = async () => {
    try {
      await deleteComment(comment.id);
      console.log("Deleted successfully");
      refreshComments();
    } catch (error) {
      console.error("Failed to delete comment:", error);
    }
  };
  
  return (
    <CommentGroup>
      <CommentHeaderGroup>
        <ProfileImage>
          <img src={profilePhoto} alt="프로필 사진" />
        </ProfileImage>
        <CommentInfoGroup>
          <InfoHeader>
            <InfoNickname>{nickname}</InfoNickname>
            <InfoTime> 1분 전</InfoTime>
          </InfoHeader>
          <MoreButton pageName={`comment-${comment.id}`} />
          <ModalComponent>
            {userInfo.accountname === comment.author.accountname ? (
              <>
                <Modal contents={["삭제"]} handleFunc={handleDelete}></Modal>
              </>
            ) : (
              <Modal contents={["신고하기"]} handleFunc={() => {
                  console.log("no");
              }}
              ></Modal>
            )}
          </ ModalComponent >
        </CommentInfoGroup>
      </CommentHeaderGroup>
      <CommentText>{comment.content}</CommentText>
    </CommentGroup>
  );
}

export default PostComment;
