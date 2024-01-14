import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
  }
`;

export const RoomItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;
`;

export const ProfileGroup = styled.div`
  position: relative;
`;

export const ProfilePhoto = styled.div`
  width: 42px;
  height: 42px;
  border: 1px solid ${(props) => props.theme.colors.placeHolderColor};
  border-radius: 50%;
  overflow: hidden;
  margin-left: 16px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ActiveStatus = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  left: 18px;
  top: 0;
  background-color: ${(props) => props.theme.colors.mainColor};
`;

export const ChatName = styled.h3`
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export const ChatGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  margin-right: 16px;
  width: calc(100% - (42px + 16px + 12px + 16px));
`;

export const ChatInfoGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const LastMessage = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.textColor};
`;

export const ChatDate = styled.span`
  font-size: ${(props) => props.theme.fontSize.xsmall};
  color: #dbdbdb;
`;
