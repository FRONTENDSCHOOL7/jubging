import React from "react";
import ChatRoomHeader from "../../components/common/Header/ChatRoomHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import ChatPage from './ChatPage';
import ChatInput from "./ChatInput";

function Chat() {
  return (
    <>
      <ChatRoomHeader />
      <ChatPage />
      <ChatInput />
      <Navbar />
    </>
  );
}

export default Chat;