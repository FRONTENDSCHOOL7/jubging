import React from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import BackSpaceHeader from '../../components/common/Header/BackSpaceHeader';
import ChatList from './../../components/common/ChatList/ChatList';

function ChatListPage() {
  return (
    <>
      <BackSpaceHeader />
      <ChatList />
      <Navbar />
    </>
  );
}

export default ChatListPage;