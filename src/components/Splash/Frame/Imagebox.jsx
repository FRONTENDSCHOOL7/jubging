import styled, { css } from "styled-components";

export const ImgBox = styled.section`
  width: 100%;

  display: flex;
  justify-content: center;

  position: relative;
  ${(props) =>
    props.$splashScreen
      ? css``
      : css`
          position: absolute;
        `}
`;

export default function Imagebox({ children, splashScreen }) {
  return <ImgBox $splashScreen={splashScreen}>{children}</ImgBox>;
}
