import React from "react";
import {
  Wrapper,
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
import { Link } from "react-router-dom";

function ChatList({ chat }) {
  return (
    <Link to={`/chat/room/`}>
      <Wrapper>
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
      </Wrapper>
    </Link>
  );
}

export default ChatList;
