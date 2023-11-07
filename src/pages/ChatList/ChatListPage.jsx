import { useState, useEffect } from "react";

import Navbar from "../../components/common/Navbar/Navbar";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";
import chatdata from "../../components/common/ChatList/chatdata.json";
import ChatList from "../../components/common/ChatList/ChatList";

function ChatListPage() {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    setChatList(chatdata);
  }, []);

  return (
    <>
      <BackSpaceHeader />
      {chatList.map((chat) => (
        <ChatList chat={chat} />
      ))}
      <Navbar />
    </>
  );
}

export default ChatListPage;
