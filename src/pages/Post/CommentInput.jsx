import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

import { postComment } from "../../api/commentAPI";

import { userInfoAtom } from "../../recoil/userAtom";

import RoundInput from "../../components/common/Input/RoundInput";
import { Button, ChatBar, ProfileImage } from "./CommentInputStyle";

function CommentInput({ onCommentPosted }) {
  const { postId } = useParams();
  const [message, setMessage] = useState("");

  const userInfo = useRecoilValue(userInfoAtom);

  // 댓글 등록
  const handlePostComment = async (e) => {
    e.preventDefault();

    if (message !== "") {
      const response = await postComment(postId, message);
      setMessage("");
      onCommentPosted();
    }
  };

  return (
    <ChatBar>
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
      <Button $active={message !== ""} onClick={handlePostComment}>
        등록
      </Button>
    </ChatBar>
  );
}

export default CommentInput;
