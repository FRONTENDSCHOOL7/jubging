// react
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// API
import { getUserProfile } from "../../api/profileAPI";

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

export default function ProfileDetail({ accountname }) {
  const userInfo = useRecoilValue(userInfoAtom);
  console.log("userinforAtom ", userInfo);

  const [profile, setProfile] = useState({});

  // 개인프로필 가져오기
  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getUserProfile(accountname);

      if (response && response.profile) {
        setProfile(response.profile);
      }
      return response.profile;
    };
    fetchUserInfo();
  }, []);

  console.log(profile);
  console.log("profile.accountname ", profile.accountname);

  return (
    <>
      {/* 나중에 유저 정보 props 추가 */}
      <ProfileContainer>
        <Link to="/profile/follower">
          <div>
            <FollowNum>2950</FollowNum>
            <FollowTitle>팔로워</FollowTitle>
          </div>
        </Link>

        <ImageContainer>
          <UserImage />
        </ImageContainer>

        <Link to="/profile/following">
          <div>
            <FollowNum>128</FollowNum>
            <FollowTitle>팔로잉</FollowTitle>
          </div>
        </Link>
      </ProfileContainer>

      <UserInfoContainer>
        <UserName>다 줍는 현지</UserName>
        <UserId>@dajubjub_hj</UserId>
        <UserIntro>같이 플로깅 할 사람 구해요 ^3^</UserIntro>
      </UserInfoContainer>

      {/* 유저 정보에 따라 버튼 다르게 보여주기 */}
      {/* 내프로필 */}
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

      {/* 팔로워 프로필 */}
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
    </>
  );
}
