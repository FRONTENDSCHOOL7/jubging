// react
import React from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';

// api
import { postComment } from "../../api/commentAPI";

// components
import RoundInput from "../../components/common/Input/RoundInput";
import {
  Button,
  ChatBar,
  InputWrapper,
  ProfileImage,
} from "./CommentInputStyle";

function CommentInput({ profilePhoto, onCommentPosted }) {
  const [message, setMessage] = useState("");
  const { postId } = useParams();

  const handlePostComment = async () => {
    if (message !== "") {
      const response = await postComment(postId ,message);
      setMessage("");
      if (response.status === 200) {
        onCommentPosted(); 
      }
    }
  };

  return (
    <ChatBar>
      <InputWrapper>
        <ProfileImage>
          <img src={profilePhoto} alt="프로필 사진" />
        </ProfileImage>
        <RoundInput
          label=""
          type="text"
          name="message"
          placeholder="댓글 입력하기..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button $active={message !== ""} onClick={handlePostComment}>등록</Button>
      </InputWrapper>
    </ChatBar>
  );
}

export default CommentInput;
