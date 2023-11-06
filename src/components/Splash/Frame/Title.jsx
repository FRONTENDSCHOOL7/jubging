import React from "react";
import styled from "styled-components";

export const MainTitle = styled.img`
  width: 190px;
  height: 140px;

  display: block;

  margin: 0 auto;
  margin-top: 72px;
  margin-bottom: 30px;
`;

export const SubTitle = styled.h2`
  margin-bottom: 70px;

  text-align: center;
  color: white;
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export default function Title({ children }) {
  return (
    <>
      <MainTitle>{children}</MainTitle>
      <SubTitle>{children}</SubTitle>
    </>
  );
}
