import React, { useState, useEffect } from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";
import ChatList from "../../components/common/ChatList/ChatList";
import chatdata from "../../components/common/ChatList/chatdata.json"

function ChatListPage() {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    setChatList(chatdata);
  }, []);

  return (
    <>
      <BackSpaceHeader />
      {chatList.map((chat) =>(
        <ChatList chat={chat} />
      ))}
      <Navbar />
    </>
  );
}

export default ChatListPage;
