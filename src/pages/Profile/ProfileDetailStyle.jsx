import { Link } from "react-router-dom";
import styled from "styled-components";
import baseprofile from "../../assets/icons/baseprofile.svg";

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
  display: inline-block;
`;

export const UserImage = styled.img.attrs({
  src: baseprofile,
})`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  z-index: 50;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 15px;
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
  margin-top: 26px;

  button:last-child {
    border: 1px solid #dbdbdb;
  }
`;

export const FollowButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 34px;
  margin-top: 26px;

  button:nth-child(2) {
    border: 1px solid #dbdbdb;
  }
`;

export const ChatLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 50px;
`;

export const ShareButton = styled.button`
  width: 50px;
  height: 100%;
`;

export const Logo = styled.img`
  width: 25px;
  height: 25px;
`;
