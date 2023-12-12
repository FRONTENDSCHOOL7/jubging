import { Link } from "react-router-dom";
import styled from "styled-components";

export const ProfileContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin-top: 26px;
`;

export const FollowNum = styled.p`
  text-align: center;
  margin-bottom: 8px;
`;

export const FollowTitle = styled.p`
  text-align: center;
  font-size: ${(props) => props.theme.fontSize.xsmall};
  color: ${(props) => props.theme.colors.textColor};
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  border: 1px solid #dbdbdb;
  border-radius: 50%;
  overflow: hidden;
`;

export const UserImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
  padding: 0 30px;
`;

export const UserName = styled.p``;

export const UserId = styled.p`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.textColor};
`;

export const UserIntro = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.textColor};
`;

export const ProfileButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 1.625rem;
  padding: 0 4.25rem;
`;

export const FollowButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 34px;
  margin-top: 26px;
  padding: 0 4.75rem;

  :nth-child(2) {
    flex: 1 0 0;
  }
`;

export const ChatLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

export const ShareButton = styled.button`
  height: 100%;
`;

export const Logo = styled.img`
  width: 25px;
  height: 25px;
`;
