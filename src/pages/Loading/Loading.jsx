import React from "react";
import styled, { keyframes } from "styled-components";
import faceBear from "../../assets/images/bear-face.png";
import faceRabbit from "../../assets/images/rabbit-face.png";
import faceDog from "../../assets/images/dog-face.png";

const pingBear = keyframes`
  0% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(-20px);
  }
  40%{
    transform: translateY(0px);
  }
  60% {
    transform: translateY(0px);
  }
  80%{
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const pingRabbit = keyframes`
  0% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(0px);
  }
  40%{
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(0px);
  }
  80%{
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
`;
const pingDog = keyframes`
  0% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(0px);
  }
  40%{
    transform: translateY(0px);
  }
  60% {
    transform: translateY(-20px);
  }
  80%{
    transform: translateY(0px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const LoadingPage = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ImageBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  margin-bottom: 20px;
`;

const FaceBear = styled.img`
  width: 60px;
  height: 60px;

  animation: ${pingBear} 2s infinite linear;
`;

const FaceRabbit = styled.img`
  margin-bottom: 10px;
  width: 60px;
  height: 60px;
  animation: ${pingRabbit} 2s infinite linear;
`;

const FaceDog = styled.img`
  width: 60px;
  height: 60px;
  animation: ${pingDog} 2s infinite linear;
`;

const LoadingText = styled.p`
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.textColor};
`;

export default function Loading({ color }) {
  return (
    <LoadingPage>
      <ImageBox>
        <FaceBear src={faceBear} />
        <FaceRabbit src={faceRabbit} />
        <FaceDog src={faceDog} />
      </ImageBox>
      <LoadingText color={color}>잠시만 기다려주세요.</LoadingText>
    </LoadingPage>
  );
}
