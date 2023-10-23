import styled, { keyframes } from "styled-components";

const start = keyframes`
from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
  
`;

export const StartBtn = styled.button`
  position: absolute;
  z-index: 10;
  background-color: transparent;
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : props.theme.fontSize.medium};

  animation: ${start} 5s;
`;
