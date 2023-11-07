import React, { useState } from "react";
import ChatRoomHeader from "../../components/common/Header/ChatRoomHeader";
import ChatPage from "./ChatPage";
import ChatInput from "./ChatInput";
import { Alert, AlertExitChat } from "../../components/common/Alert/Alert";
import { ExitChat, Modal } from "../../components/common/Modal/Modal";

function Chat() {
  return (
    <>
      <ChatRoomHeader />
      <ChatPage />
      <ChatInput />
    </>
  );
}

export default Chat;
