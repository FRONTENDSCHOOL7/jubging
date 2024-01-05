import styled from "styled-components";

export const ChatBar = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  padding: 0 12px;
  border-top: 1px solid #dfdfdf;
  background-color: #ffffff;

  @media screen and (min-width: 769px) {
    max-width: 390px;
  }
`;

export const Button = styled.button`
  flex-shrink: 0;
  background-color: transparent;
  color: ${(props) =>
    props.$active
      ? props.theme.colors.mainColor
      : props.theme.colors.placeHolderColor};
  font-size: ${(props) => props.theme.fontSize.medium};
`;
