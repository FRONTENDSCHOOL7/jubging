import { useLocation } from "react-router-dom";

import baseprofile from "../../assets/images/base-profile.webp";
import {
  ProfileLink,
  Section,
  UserName,
  SubText,
  ImageDiv,
} from "./FollowerListStyle";

export default function FollowerList({ follower, following }) {
  const loaction = useLocation();
  const numberRegex =
    /^https:\/\/api\.mandarin\.weniv\.co\.kr\/(?:(?!null|undefined)[\w.]*)$/;

  return (
    <>
      {loaction.pathname.includes("follower") ? (
        <ProfileLink to={`/profile/${follower.accountname}`}>
          <ImageDiv>
            <img
              src={
                numberRegex.test(follower.image) ? follower.image : baseprofile
              }
              alt="프로필 이미지"
            />
          </ImageDiv>
          <Section>
            <UserName>{follower.username}</UserName>
            <SubText>@{follower.accountname}</SubText>
          </Section>
        </ProfileLink>
      ) : (
        <ProfileLink to={`/profile/${following.accountname}`}>
          <ImageDiv>
            <img
              src={
                numberRegex.test(following.image)
                  ? following.image
                  : baseprofile
              }
              alt="프로필 이미지"
            />
          </ImageDiv>
          <Section>
            <UserName>{following.username}</UserName>
            <SubText>@{following.accountname}</SubText>
          </Section>
        </ProfileLink>
      )}
    </>
  );
}
