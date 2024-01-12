import { userInfoAtom } from "../../../recoil/userAtom";

import { useRecoilValue } from "recoil";

import home from "../../../assets/icons/icon-home.svg";
import chat from "../../../assets/icons/icon-chat.svg";
import profile from "../../../assets/icons/icon-profile.svg";
import post from "../../../assets/icons/icon-post.svg";
import newsLetter from "../../../assets/images/earth.svg";
import {
  NavUl,
  Navli,
  NavbarLink,
  NewLetterLink,
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
        <NavbarLink to={`/ploggingrecord/${userInfo.accountname}`}>
          <Logo src={post} alt="게시물 작성" />
          <Title>플로깅 기록</Title>
        </NavbarLink>
      </Navli>

      <Navli>
        <NewLetterLink to="/newsletter">
          <NewsLetter src={newsLetter} alt="뉴스레터" />
        </NewLetterLink>
      </Navli>

      <Navli>
        <NavbarLink to="/chat">
          <Logo src={chat} alt="채팅" />
          <Title>채팅</Title>
        </NavbarLink>
      </Navli>

      <Navli>
        <NavbarLink to={`/profile/${userInfo.accountname}`}>
          <Logo src={profile} alt="프로필" />
          <Title>프로필</Title>
        </NavbarLink>
      </Navli>
    </NavUl>
  );
}
