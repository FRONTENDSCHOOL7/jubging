// react
import React from "react";
import { useState } from "react";
import { useParams } from 'react-router-dom';
import { useRecoilValue } from "recoil";

// api
import { postComment } from "../../api/commentAPI";

// atom
import { userInfoAtom } from "../../recoil/userAtom";

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

  const userInfo = useRecoilValue(userInfoAtom);

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
          <img src={userInfo.image} alt="프로필 사진" />
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
