import styled from "styled-components";

export const Container = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top: 1px solid #dfdfdf;
  background-color: #ffffff;
  z-index: 99;

  @media screen and (min-width: 769px) {
    max-width: 390px;
  }
`;
