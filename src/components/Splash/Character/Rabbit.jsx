import React from "react";
import styled, { keyframes, css } from "styled-components";
import bigRabbit from "../../../assets/images/big-rabbit.svg";

const jumpRabbit = keyframes`
  0%{
    transform: translateY(0px);
  }
  10%{
    transform: translateY(-10px);
  }
  20% {
    transform: translateY(-20px);
  }
  30%{
    transform: translateY(-30px);
  }
  40%{
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(0px);
  }
  70% {
    transform: translateY(0px);
  }
  80%{
    transform: translateY(-10px);
  }
  90%{
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const BigRabbit = styled.img`
  width: 140px;
  height: 140px;

  position: absolute;
  top: -80px;
  left: 10px;
  z-index: 20;
  ${(props) =>
    props.splashScreen
      ? css`
          animation: ${jumpRabbit} 1.5s infinite linear;
        `
      : css``}
`;

export default function Rabbit({ splashScreen }) {
  return <BigRabbit src={bigRabbit} splashScreen={splashScreen} />;
}
