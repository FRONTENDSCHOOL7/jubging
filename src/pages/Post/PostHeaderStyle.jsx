import styled from "styled-components";

export const PostHeaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 17px;
  margin-right: 28px;
  margin-bottom: 10.35px;
`;

export const ProfilePhoto = styled.div`
  width: 42px;
  height: 42px;
  border: 1px solid ${(props) => props.theme.colors.placeHolderColor};
  border-radius: 50%;
  overflow: hidden;
`;

export const ProfileLink = styled.a`
  display: flex;
`;

export const ProfileName = styled.div`
  margin-left: 5px;
  margin-top: 7px;
`;

export const Nickname = styled.h3`
  margin: 0;
`;

export const MoreBtn = styled.button`
  background-color: skyblue;
  width: 2px;
  height: 16.66px;
  margin: 5px;
`;

export const UserId = styled.span`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
`;

const PostHeaderStyle = {
  PostHeaderGroup,
  ProfilePhoto,
  ProfileLink,
  ProfileName,
  Nickname,
  MoreBtn,
  UserId,
};

export default PostHeaderStyle;