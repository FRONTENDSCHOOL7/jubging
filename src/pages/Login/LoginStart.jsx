import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-white.png";
import Bear from "../../components/Splash/Character/Bear";
import Rabbit from "../../components/Splash/Character/Rabbit";
import Dog from "../../components/Splash/Character/Dog";
import Earth from "../../components/Splash/Character/Earth";
import Container from "../../components/Splash/Frame/Container";
import { MainTitle, SubTitle } from "../../components/Splash/Frame/Title";
import Imagebox from "../../components/Splash/Frame/Imagebox";
import ButtonCotainer from "../../components/common/Button/ButtonContainer";

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
  return (
    <Container>
      <MainTitle src={logo} />
      <SubTitle>깨끗한 지구 함께 만들어가요</SubTitle>

      <LoginBox>
        <Link to="/login">
          <ButtonCotainer bgColor={"#40A6DE"} hoverFilter>
            로그인
          </ButtonCotainer>
        </Link>
        <Link to="/signup">
          <ButtonCotainer color={"black"} bgColor={"#ffffff"} hoverFilter>
            회원가입
          </ButtonCotainer>
        </Link>
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
