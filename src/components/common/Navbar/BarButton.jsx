// reacrt
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";

// atom
import { userInfoAtom } from "../../../recoil/userAtom";

// recoil
import { useRecoilValue } from "recoil";

// components
import home from "../../../assets/icons/icon-home.svg";
import chat from "../../../assets/icons/icon-chat.svg";
import profile from "../../../assets/icons/icon-profile.svg";
import post from "../../../assets/icons/icon-post.svg";
import newsLetter from "../../../assets/icons/icon-news-letter.svg";
import {
  NavUl,
  Navli,
  NavbarLink,
  Logo,
  NewsLetter,
  Title,
} from "./BarButtonStyle";

export default function BarButton() {
  const userInfo = useRecoilValue(userInfoAtom);

  return (
    <NavUl>
      <Navli>
        <NavbarLink to="/home">
          <Logo src={home} alt="홈" />
          <Title>홈</Title>
        </NavbarLink>
      </Navli>

      <Navli>
        <NavbarLink to="/upload">
          <Logo src={post} alt="게시물 작성" />
          <Title>게시물 작성</Title>
        </NavbarLink>
      </Navli>

      <Navli>
        <NavbarLink to="/newsletter">
          <NewsLetter src={newsLetter} alt="뉴스레터" />
        </NavbarLink>
      </Navli>

      <Navli>
        <NavbarLink to="/chat">
          <Logo src={chat} alt="채팅" />
          <Title>채팅</Title>
        </NavbarLink>
      </Navli>

      {/* 프로필 클릭 시 로그인된 계정의 프로필로 이동 */}
      <Navli>
        <NavbarLink to={`/profile/${userInfo.accountname}`}>
          <Logo src={profile} alt="프로필" />
          <Title>프로필</Title>
        </NavbarLink>
      </Navli>
    </NavUl>
  );
}
