import React from "react";
import { useState } from "react";
import RoundInput from "../../components/common/Input/RoundInput";
import {
  Button,
  ChatBar,
  InputWrapper,
  ProfileImage,
} from "./CommentInputStyle";

function CommentInput({ profilePhoto }) {
  const [message, setMessage] = useState("");
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
          placeholder="메시지 입력하기..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button $active={message !== ""}>등록</Button>
      </InputWrapper>
    </ChatBar>
  );
}

export default CommentInput;
