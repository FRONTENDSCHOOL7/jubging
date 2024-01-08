import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const MessageGroup = styled.div`
  display: flex;
  align-items: start;
  justify-content: ${(props) => (props.$isMine ? "flex-end" : "flex-start")};

  & > * {
    margin-right: 10px;
  }

  ${(props) =>
    props.$isMine &&
    `
    & > img {
      display:none; 
    }
  `}
`;

export const MessageContainer = styled.div`
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: ${(props) => (props.$isMine ? "row-reverse" : "row")};
  align-items: flex-end;
  flex-shrink: ${(props) => (props.$isMine ? "0" : "0")};

  & > div {
    display: flex;
    flex-direction: ${(props) => (props.$isMine ? "row-reverse" : "colum")};
    align-items: flex-end;
    justify-content: ${(props) =>
      props.$isMine ? "space-between" : "flex-start"};
  }
`;

export const Message = styled.div`
  max-width: 70%;
  margin-bottom: 17px;
  padding: 10px;
  line-height: 18px;
  letter-spacing: -0.28px;
  font-family: "GmarketSansLight";
  color: ${(props) => (props.$isMine ? "#FFFFFF" : "#000000")};
  background-color: ${(props) =>
    props.$isMine ? props.theme.colors.mainColor : "#FFFFFF"};
  border-radius: ${(props) =>
    props.$isMine ? "10px 0 10px 10px" : "0 10px 10px 10px"};
  border: 1px solid
    ${(props) => (props.$isMine ? "none" : props.theme.colors.placeHolderColor)};
`;

export const ProfilePhoto = styled.div`
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
    border-radius: 50%;
  }
`;

export const Time = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.placeHolderColor};
  transform: translateY(-100%);
  margin-right: ${(props) => (props.$isMine ? "16px" : "0")};
  margin-left: ${(props) => (props.$isMine ? "0" : "16px")};
`;
