import React from "react";
import noFollowRabbit from "../../assets/images/crying-rabbit.svg";
import {
  NoFollowHomeGroup,
  NoFollowRabbitImg,
  SearchForUser,
  SearchUserBtn
} from "./NoFollowHomeStyle";

function NoFollowHome() {
  return (
    <NoFollowHomeGroup>
      <NoFollowRabbitImg src={noFollowRabbit} alt="팔로워가 없어서 우는 토끼" />
      <SearchForUser>유저를 검색해 팔로우 해보세요!</SearchForUser>
      <SearchUserBtn>
        검색하기
      </SearchUserBtn>
    </NoFollowHomeGroup>
  );
}

export default NoFollowHome;
