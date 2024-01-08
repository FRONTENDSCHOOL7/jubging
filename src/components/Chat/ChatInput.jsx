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
        label=""
        type="text"
        name="message"
        placeholder="메시지 입력하기..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button $active={message !== ""}>전송</Button>
    </ChatBar>
  );
}

export default ChatInput;
