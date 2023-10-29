import React from "react";
import { useLocation, useParams } from "react-router-dom";

import bear from "../../../assets/images/bear-face.svg";
import {
  ProfileLink,
  Image,
  Section,
  UserName,
  SubText,
} from "./FollowerListStyle";

export default function FollowerList({ follower, following }) {
  const { accountname } = useParams();
  const loaction = useLocation();

  // console.log(loaction.pathname.slice(18));

  return (
    <>
      {loaction.pathname.includes("follower") ? (
        <ProfileLink to={`/profile/${follower.accountname}`}>
          <Image $image={follower.image && bear}></Image>
          <Section>
            {/* 기능 구현 시 변수로 교체 */}

            <UserName>{follower.username}</UserName>
            <SubText>{follower.accountname}</SubText>
          </Section>
        </ProfileLink>
      ) : (
        <ProfileLink to={`/profile/${following.accountname}`}>
          <Image $image={following.image && bear}></Image>
          <Section>
            {/* 기능 구현 시 변수로 교체 */}

            <UserName>{following.username}</UserName>
            <SubText>{following.accountname}</SubText>
          </Section>
        </ProfileLink>
      )}
    </>
  );
}
