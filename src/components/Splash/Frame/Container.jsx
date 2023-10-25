import React from "react";
import styled, { css } from "styled-components";

export const ContainerBox = styled.div`
  position: relative;

  min-height: 100vh;
  height: 100%;

  background-color: #94d9ff;

  overflow: hidden;

  ${(props) =>
    props.$splashScreen
      ? css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `
      : css``}
`;

export default function Container({ children, splashScreen }) {
  return <ContainerBox $splashScreen={splashScreen}>{children}</ContainerBox>;
}
