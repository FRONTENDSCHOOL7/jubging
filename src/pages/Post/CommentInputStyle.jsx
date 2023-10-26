import styled from "styled-components";

export const ChatBar = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 390px;
  height: 60px;
  padding: 0 12px;
  border-top: 1px solid #dfdfdf;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileImage = styled.div`
  width: 42px;
  height: 36px;
  border: 1px solid ${(props) => props.theme.colors.placeHolderColor};
  border-radius: 50%;
  overflow: hidden;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) =>
    props.$active
      ? props.theme.colors.mainColor
      : props.theme.colors.placeHolderColor};
  font-size: ${(props) => props.theme.fontSize.medium};
`;
