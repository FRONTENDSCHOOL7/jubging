import { useNavigate } from "react-router-dom";

import logo from "../../assets/images/logo-white.webp";
import Bear from "../../components/Splash/Character/Bear";
import Rabbit from "../../components/Splash/Character/Rabbit";
import Dog from "../../components/Splash/Character/Dog";
import Earth from "../../components/Splash/Character/Earth";
import Container from "../../components/Splash/Frame/Container";
import { MainTitle, SubTitle } from "../../components/Splash/Frame/Title";
import Imagebox from "../../components/Splash/Frame/Imagebox";
import Button from "../../components/common/Button/Button";
import {
  Facebook,
  Google,
  Kakao,
  SnsLogo,
  LoginSection,
  SnsLoginText,
  LoginBox,
} from "./LoginStartStyle";
import A11yHidden from "../../components/common/A11yHidden/A11yHidden";

export default function LoginStart() {
  const navigate = useNavigate();

  return (
    <Container>
      <MainTitle src={logo} alt="로고 이미지" />
      <SubTitle>지구를 위한 나의 발자국</SubTitle>

      <LoginBox>
        <Button
          type="button"
          size="lg"
          variant="primary"
          onClick={() => navigate("/login")}
        >
          로그인
        </Button>
        <Button
          type="button"
          size="lg"
          variant="white"
          onClick={() => navigate("/signup")}
        >
          회원가입
        </Button>
      </LoginBox>

      <LoginSection>
        <h2>
          <A11yHidden>SNS로그인 및 회원정보 찾기</A11yHidden>
        </h2>
        <SnsLoginText>SNS로 로그인 하기</SnsLoginText>
        <SnsLogo>
          <Kakao type="button" disabled>
            <A11yHidden>카카오 로그인</A11yHidden>
          </Kakao>
          <Google type="button" disabled>
            <A11yHidden>구글 로그인</A11yHidden>
          </Google>
          <Facebook type="button" disabled>
            <A11yHidden>구글 로그인</A11yHidden>
          </Facebook>
        </SnsLogo>
      </LoginSection>

      <Imagebox splashScreen={false}>
        <Rabbit splashScreen={false} />
        <Bear splashScreen={false} />
        <Dog splashScreen={false} />
        <Earth splashScreen={false} />
      </Imagebox>
    </Container>
  );
}
