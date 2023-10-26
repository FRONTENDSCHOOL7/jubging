// react
import React from "react";
import { Link } from "react-router-dom";

// atom
import { userInfoAtom } from "../../recoil/userAtom";

// recoil
import { useRecoilValue } from "recoil";

// component
import ButtonContainer from "../../components/common/Button/ButtonContainer";
import chat from "../../assets/icons/icon-chat.svg";
import share from "../../assets/icons/icon-share.svg";
import {
  ChatLink,
  FollowButtonContainer,
  FollowNum,
  FollowTitle,
  ImageContainer,
  Logo,
  ProfileButtonContainer,
  ProfileContainer,
  ShareButton,
  UserId,
  UserImage,
  UserInfoContainer,
  UserIntro,
  UserName,
} from "./ProfileDetailStyle";

export default function ProfileDetail({ accountname, profile }) {
  const userInfo = useRecoilValue(userInfoAtom);

  return (
    <>
      <ProfileContainer>
        <Link to="/profile/follower">
          <div>
            <FollowNum>{profile.followerCount}</FollowNum>
            <FollowTitle>팔로워</FollowTitle>
          </div>
        </Link>

        <ImageContainer>
          <UserImage />
        </ImageContainer>

        <Link to="/profile/following">
          <div>
            <FollowNum>{profile.followingCount}</FollowNum>
            <FollowTitle>팔로잉</FollowTitle>
          </div>
        </Link>
      </ProfileContainer>

      <UserInfoContainer>
        <UserName>{profile.username}</UserName>
        <UserId>{profile.accountname}</UserId>
        <UserIntro>{profile.intro}</UserIntro>
      </UserInfoContainer>

      {/* 유저 정보에 따라 버튼 다르게 보여주기 */}
      {userInfo.accountname === profile.accountname ? (
        <ProfileButtonContainer>
          <Link to="/profile/edit">
            <ButtonContainer
              fontSize={"14px"}
              bgColor={"#41A6DE"}
              height={"34px"}
            >
              프로필 수정
            </ButtonContainer>
          </Link>

          <Link to="/profile/addcourse">
            <ButtonContainer
              fontSize={"14px"}
              bgColor={"#ffffff"}
              color={"#000000"}
              height={"34px"}
            >
              추천 코스 등록
            </ButtonContainer>
          </Link>
        </ProfileButtonContainer>
      ) : (
        <FollowButtonContainer>
          <ChatLink to="/chat">
            <Logo src={chat} />
          </ChatLink>
          <ButtonContainer
            fontSize={"14px"}
            bgColor={"#ffffff"}
            color={"#000000"}
            height={"34px"}
          >
            언팔로우
          </ButtonContainer>
          <ShareButton>
            <Logo src={share} />
          </ShareButton>
        </FollowButtonContainer>
      )}
    </>
  );
}
