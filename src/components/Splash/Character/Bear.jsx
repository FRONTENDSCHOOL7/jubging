import React from "react";
import styled, { keyframes, css } from "styled-components";
import bigBear from "../../../assets/images/big-bear.svg";

const jumpBear = keyframes`
  0%{
    transform: translateY(0px);
  }
  10% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(0px);
  }
  30%{
    transform: translateY(-10px);
  }
  40%{
    transform: translateY(-20px);
  }
  50% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-20px);
  }
  70% {
    transform: translateY(-10px);
  }
  80%{
    transform: translateY(0px);
  }
  90%{
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const BigBear = styled.img`
  width: 120px;
  height: 120px;

  position: absolute;
  top: -95px;
  left: 130px;
  z-index: 20;

  ${(props) =>
    props.$splashScreen
      ? css`
          animation: ${jumpBear} 1s infinite linear;
        `
      : css``}
`;

export default function Bear({ splashScreen }) {
  return <BigBear src={bigBear} $splashScreen={splashScreen} />;
}
