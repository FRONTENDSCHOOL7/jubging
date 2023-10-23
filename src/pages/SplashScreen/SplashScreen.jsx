import React from "react";
import Bear from "../../components/Splash/Character/Bear";
import Rabbit from "../../components/Splash/Character/Rabbit";
import Dog from "../../components/Splash/Character/Dog";
import Earth from "../../components/Splash/Character/Earth";
import Container from "../../components/Splash/Frame/Container";
import Imagebox from "../../components/Splash/Frame/Imagebox";
import { StartBtn } from "./SplashScreenStyle";

export default function SplashScreen() {
  return (
    <Container splashScreen={true}>
      <Imagebox splashScreen={true}>
        <Rabbit splashScreen={true} />
        <Bear splashScreen={true} />
        <Dog splashScreen={true} />
        <Earth splashScreen={true} />
      </Imagebox>
      <StartBtn fontSize={"36px"}>시작하기</StartBtn>
    </Container>
  );
}
