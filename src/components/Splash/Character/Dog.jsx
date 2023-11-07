import styled, { keyframes, css } from "styled-components";
import bigDog from "../../../assets/images/big-dog.svg";

const jumpDog = keyframes`
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
    transform: translateY(-10px);
  }
  40%{
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-20px);
  }
  70% {
    transform: translateY(-30px);
  }
  80%{
    transform: translateY(-20px);
  }
  90%{
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export const BigDog = styled.img`
  width: 140px;
  height: 140px;

  position: absolute;
  top: -75px;
  right: 0px;
  z-index: 20;

  ${(props) =>
    props.$splashScreen
      ? css`
          animation: ${jumpDog} 1.5s infinite linear;
        `
      : css``}
`;

export default function Dog({ splashScreen }) {
  return <BigDog src={bigDog} $splashScreen={splashScreen} />;
}
