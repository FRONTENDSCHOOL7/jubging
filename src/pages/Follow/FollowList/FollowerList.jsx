import React from "react";
import { useLocation } from "react-router-dom";

import bear from "../../../assets/images/bear-face.svg";
import {
  ProfileLink,
  Image,
  Section,
  UserName,
  SubText,
} from "./FollowerListStyle";

export default function FollowerList({ follower, following }) {
  const loaction = useLocation();

  return (
    <>
      {loaction.pathname.includes("follower") ? (
        <ProfileLink to={`/profile/${follower.accountname}`}>
          <Image $image={follower.image && bear}></Image>
          <Section>
            <UserName>{follower.username}</UserName>
            <SubText>{follower.accountname}</SubText>
          </Section>
        </ProfileLink>
      ) : (
        <ProfileLink to={`/profile/${following.accountname}`}>
          <Image $image={following.image && bear}></Image>
          <Section>
            <UserName>{following.username}</UserName>
            <SubText>{following.accountname}</SubText>
          </Section>
        </ProfileLink>
      )}
    </>
  );
}
