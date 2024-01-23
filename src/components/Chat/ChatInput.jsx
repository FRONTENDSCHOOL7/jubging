import { useState } from "react";

import { ChatBar, Button } from "./ChatInputStyle";
import RoundInput from "../common/Input/RoundInput";
import PlusIcon from "../../assets/icons/icon-plus.svg";

function ChatInput() {
  const [message, setMessage] = useState("");

  return (
    <ChatBar>
      <Button>
        <img src={PlusIcon} alt="plus" />
      </Button>
      <RoundInput
        id="chat"
        label="채팅 메시지 입력"
        type="text"
        name="message"
        placeholder="메시지 입력하기..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        hidden
      />
      <Button $active={message !== ""}>전송</Button>
    </ChatBar>
  );
}

export default ChatInput;
