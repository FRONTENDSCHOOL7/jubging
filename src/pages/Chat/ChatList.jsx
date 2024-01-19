import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import chatdata from "../../components/Chat/chatdata.json";
import {
  RoomItem,
  ProfileGroup,
  ProfilePhoto,
  ActiveStatus,
  ChatGroup,
  ChatInfoGroup,
  ChatName,
  LastMessage,
  ChatDate,
} from "./ChatListStyle";
import Header from "../../components/common/Header/Header";
import Navbar from "../../components/common/Navbar/Navbar";

function ChatList() {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    setChatList(chatdata);
  }, []);

  return (
    <>
      <Header>채팅</Header>
      {chatList.map((chat) => (
        <Link to={`/chat/room/`}>
          <RoomItem>
            <ProfileGroup>
              <ActiveStatus />
              <ProfilePhoto>
                <img src={chat.profilePhoto} alt="프로필 사진" />
              </ProfilePhoto>
            </ProfileGroup>
            <ChatGroup>
              <ChatName>{chat.nickname}</ChatName>
              <ChatInfoGroup>
                <LastMessage>{chat.lastMessage}</LastMessage>
                <ChatDate>{chat.lastMessageDate}</ChatDate>
              </ChatInfoGroup>
            </ChatGroup>
          </RoomItem>
        </Link>
      ))}
      <Navbar />
    </>
  );
}

export default ChatList;
