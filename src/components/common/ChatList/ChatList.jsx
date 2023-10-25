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

function ChatList({ profilePhoto }) {
  return (
    <Link to="/chat/room">
      <Wrapper>
        <RoomItem>
          <ProfileGroup>
            <ActiveStatus />
            <ProfilePhoto>
              <img src={profilePhoto} alt="프로필 사진" />
            </ProfilePhoto>
          </ProfileGroup>
          <ChatGroup>
            <ChatName>닉네임</ChatName>
            <ChatInfoGroup>
              <LastMessage>채팅 내용</LastMessage>
              <ChatDate>2023년 10월 22일</ChatDate>
            </ChatInfoGroup>
          </ChatGroup>
        </RoomItem>
      </Wrapper>
    </Link>
  );
}

export default ChatList;
