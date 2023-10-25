import React from 'react';
import { useState } from 'react';
import Input from '../../components/common/Input/Input';
import {
  ChatBar,
  InputWrapper,
  Button,
} from './ChatInputStyle';
import PlusIcon from "../../assets/icons/icon-plus.svg";

function ChatInput() {
  const [message, setMessage] = useState('');
  return (
    <ChatBar>
      <InputWrapper>
        <Button>
          <img src={PlusIcon} alt="plus"/>
        </Button>
        <Input
          label=""
          type="text"
          name="message"
          placeholder="메시지 입력하기..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}/>
        <Button $active={message !== ''}>전송</Button>
      </InputWrapper>
    </ChatBar>
  );
}

export default ChatInput;
