import styled from "styled-components";

export const NLHeaderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 19px 0 10.35px 17px;
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

export const UserId = styled.span`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
`;

const PostHeaderStyle = {
  NLHeaderGroup,
  ProfilePhoto,
  ProfileLink,
  ProfileName,
  Nickname,
  UserId,
};

export default PostHeaderStyle;