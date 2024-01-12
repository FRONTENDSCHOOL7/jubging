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
  FindIdPassword,
  LoginBox,
} from "./LoginStartStyle";

export default function LoginStart() {
  const navigate = useNavigate();

  return (
    <Container>
      <MainTitle src={logo} />
      <SubTitle>깨끗한 지구 함께 만들어가요</SubTitle>

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
        <SnsLoginText>SNS로 로그인 하기</SnsLoginText>
        <SnsLogo>
          <Kakao />
          <Google />
          <Facebook />
        </SnsLogo>
        <FindIdPassword>아이디 찾기 | 비밀번호 찾기</FindIdPassword>
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
