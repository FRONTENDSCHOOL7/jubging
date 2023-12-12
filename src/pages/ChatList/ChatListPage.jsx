import { useState, useEffect } from "react";

import Header from "../../components/common/Header/Header";
import Navbar from "../../components/common/Navbar/Navbar";
import chatdata from "../../components/common/ChatList/chatdata.json";
import ChatList from "../../components/common/ChatList/ChatList";

function ChatListPage() {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    setChatList(chatdata);
  }, []);

  return (
    <>
      <Header>채팅</Header>
      {chatList.map((chat) => (
        <ChatList chat={chat} />
      ))}
      <Navbar />
    </>
  );
}

export default ChatListPage;
