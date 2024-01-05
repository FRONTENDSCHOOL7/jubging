import styled from "styled-components";

export const ChatBar = styled.section`
  display: flex;
  justify-content: space-between;
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

export const ProfileImage = styled.div`
  width: 42px;
  height: 42px;
  border: 1px solid ${(props) => props.theme.colors.placeHolderColor};
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) =>
    props.$active
      ? props.theme.colors.mainColor
      : props.theme.colors.placeHolderColor};
  font-size: ${(props) => props.theme.fontSize.medium};
  flex-shrink: 0;
`;
