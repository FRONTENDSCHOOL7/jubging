import React from "react";
import ProfileChange from "../../components/common/Profile/ProfileImage";
import ButtonContainer from "../../components/common/Button/ButtonContainer";
import chat from "../../assets/icons/icon-chat.svg";
import share from "../../assets/icons/icon-share.svg";
import {
  ChatButton,
  FollowButtonContainer,
  FollowNum,
  FollowTitle,
  Logo,
  ProfileButtonContainer,
  ProfileContainer,
  ShareButton,
  UserId,
  UserInfoContainer,
  UserIntro,
  UserName,
} from "./ProfileDetailStyle";

export default function ProfileDetail() {
  return (
    <>
      {/* 나중에 유저 정보 props 추가 */}
      <ProfileContainer>
        <div>
          <FollowNum>2950</FollowNum>
          <FollowTitle>팔로워</FollowTitle>
        </div>
        <ProfileChange />
        <div>
          <FollowNum>128</FollowNum>
          <FollowTitle>팔로워</FollowTitle>
        </div>
      </ProfileContainer>

      <UserInfoContainer>
        <UserName>다 줍는 현지</UserName>
        <UserId>@dajubjub_hj</UserId>
        <UserIntro>같이 플로깅 할 사람 구해요 ^3^</UserIntro>
      </UserInfoContainer>

      {/* 유저 정보에 따라 버튼 다르게 보여주기 */}
      {/* 내프로필 */}
      <ProfileButtonContainer>
        <ButtonContainer fontSize={"14px"} bgColor={"#41A6DE"} height={"34px"}>
          프로필 수정
        </ButtonContainer>
        <ButtonContainer
          fontSize={"14px"}
          bgColor={"#ffffff"}
          color={"#000000"}
          height={"34px"}
        >
          추천 코스 등록
        </ButtonContainer>
      </ProfileButtonContainer>

      {/* 팔로워 프로필 */}
      <FollowButtonContainer>
        <ChatButton>
          <Logo src={chat} />
        </ChatButton>
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
    </>
  );
}
