import React from "react";
import styled, { css, keyframes } from "styled-components";
import earth from "../../../assets/images/earth.svg";

const rotate = keyframes`
from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const ImgEarth = styled.img`
  width: 370px;
  height: 370px;
  z-index: 10;

  ${(props) =>
    props.$splashScreen
      ? css`
          animation: ${rotate} 20s infinite linear;
        `
      : css``}
`;

export default function Earth({ splashScreen }) {
  return <ImgEarth src={earth} $splashScreen={splashScreen} />;
}
