import React from "react";
import home from "../../../assets/icons/icon-home.svg";
import chat from "../../../assets/icons/icon-chat.svg";
import profile from "../../../assets/icons/icon-profile.svg";
import post from "../../../assets/icons/icon-post.svg";
import newLetter from "../../../assets/icons/icon-news-letter.svg";
import { Button, Logo, NewsLetter, Title } from "./BarButtonStyle";

export default function BarButton() {
  return (
    <>
      {/* 라우터 추가하면 Link로 변경 */}
      <Button>
        <Logo src={home} alt="홈" />
        <Title>홈</Title>
      </Button>
      <Button>
        <Logo src={post} alt="게시물 작성" />
        <Title>게시물 작성</Title>
      </Button>
      <Button>
        <NewsLetter src={newLetter} alt="뉴스레터" />
      </Button>
      <Button>
        <Logo src={chat} alt="채팅" />
        <Title>채팅</Title>
      </Button>
      <Button>
        <Logo src={profile} alt="프로필" />
        <Title>프로필</Title>
      </Button>
    </>
  );
}
