import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { setFollowUser, setUnFollowUser } from "../../api/follow";

import { userInfoAtom } from "../../recoil/userAtom";

import { useRecoilValue } from "recoil";

import Button from "../common/Button/Button";
import chat from "../../assets/icons/icon-chat.svg";
import share from "../../assets/icons/icon-share.svg";
import baseprofile from "../../assets/images/base-profile.webp";
import TierCard from "../Tier/TierCard";
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
import A11yHidden from "../common/A11yHidden/A11yHidden";

export default function ProfileDetail({ profile, accumulate }) {
  const numberRegex =
    /^https:\/\/api\.mandarin\.weniv\.co\.kr\/(?:(?!null|undefined)[\w.]*)$/;
  const userInfo = useRecoilValue(userInfoAtom);
  const { accountname } = useParams();
  const navigate = useNavigate();

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

  // url 공유
  const handleShare = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert("URL이 복사되었습니다 ✨");
      })
      .catch((error) => {
        alert("URL 복사에 실패했습니다: ", error);
      });
  };

  return (
    <section>
      <h2>
        <A11yHidden>회원 정보</A11yHidden>
      </h2>
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
          <UserImage
            src={numberRegex.test(profile.image) ? profile.image : baseprofile}
            alt="프로필 이미지"
          />
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
        <UserId>@{profile.accountname}</UserId>
        <UserIntro>{profile.intro}</UserIntro>
      </UserInfoContainer>

      {/* 유저 정보에 따라 버튼 다르게 보여주기 */}
      {userInfo.accountname === profile.accountname ? (
        <ProfileButtonContainer>
          <Button
            type="button"
            size="md"
            variant="primary"
            onClick={() => navigate(`/profile/${userInfo.accountname}/edit`)}
          >
            프로필 수정
          </Button>
        </ProfileButtonContainer>
      ) : (
        <FollowButtonContainer>
          <ChatLink to="/chat">
            <Logo src={chat} />
          </ChatLink>
          {follow ? (
            <Button
              type="button"
              size="md"
              variant="white"
              onClick={handleUnFollow}
            >
              언팔로우
            </Button>
          ) : (
            <Button
              type="button"
              size="md"
              variant="primary"
              onClick={handleFollow}
            >
              팔로우
            </Button>
          )}

          <ShareButton onClick={handleShare}>
            <Logo src={share} />
          </ShareButton>
        </FollowButtonContainer>
      )}
      <TierCard accumulate={accumulate} accountname={accountname}></TierCard>
    </section>
  );
}
