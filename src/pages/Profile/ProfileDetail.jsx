// react
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// api
import { setFollowUser, setUnFollowUser } from "../../api/follow";

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

export default function ProfileDetail({ profile }) {
  const userInfo = useRecoilValue(userInfoAtom);
  const { accountname } = useParams();

  const [follow, setFollow] = useState(profile.isfollow);
  const [followerCount, setFollowerCount] = useState(0);

  // 팔로우 이벤트
  const handleFollow = async () => {
    const response = await setFollowUser(accountname);
    setFollow(!follow);
    setFollowerCount(followerCount + 1);
  };

  // 언팔로우 이벤트
  const handleUnFollow = async () => {
    const response = await setUnFollowUser(accountname);
    setFollow(!follow);
    setFollowerCount(followerCount - 1);
  };

  useEffect(() => {
    setFollow(profile.isfollow);
    setFollowerCount(profile.followerCount);
  }, [profile]);

  return (
    <>
      <ProfileContainer>
        <Link
          to={`/profile/${profile.accountname}/follower`}
          state={{ userData: profile }}
        >
          <div>
            <FollowNum>{followerCount}</FollowNum>
            <FollowTitle>팔로워</FollowTitle>
          </div>
        </Link>

        <ImageContainer>
          <UserImage src={profile.image} alt="프로필 이미지" />
        </ImageContainer>

        <Link
          to={`/profile/${profile.accountname}/following`}
          state={{ userData: profile }}
        >
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
          <Link to={`/profile/${userInfo.accountname}/edit`}>
            <ButtonContainer
              fontSize={"14px"}
              bgColor={"#41A6DE"}
              height={"34px"}
              hoverFilter
            >
              프로필 수정
            </ButtonContainer>
          </Link>

          <Link
            to={`/profile/${profile.accountname}/addcourse`}
            state={{ userData: profile }}
          >
            <ButtonContainer
              fontSize={"14px"}
              bgColor={"#ffffff"}
              color={"#000000"}
              height={"34px"}
              hoverFilter
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
          {follow ? (
            <ButtonContainer
              fontSize={"14px"}
              bgColor={"#ffffff"}
              color={"#000000"}
              height={"34px"}
              onClick={handleUnFollow}
            >
              언팔로우
            </ButtonContainer>
          ) : (
            <ButtonContainer
              fontSize={"14px"}
              height={"34px"}
              onClick={handleFollow}
            >
              팔로우
            </ButtonContainer>
          )}

          <ShareButton>
            <Logo src={share} />
          </ShareButton>
        </FollowButtonContainer>
      )}
    </>
  );
}
