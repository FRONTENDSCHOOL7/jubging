import React from "react";
import styled from "styled-components";
import noFollowRabbit from "../../assets/images/crying-rabbit.svg";

const NoFollowHomeGroup = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const NoFollowRabbitImg = styled.img`
  width: 98.5px;
  margin: 0 auto;
`;

const SearchForUser = styled.span`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.medium};
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SearchUserBtn = styled.button`
  width: 120px;
  height: 44px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.mainColor};
  border-radius: 44px;
  color: #fff;
  font-size: ${(props) => props.theme.fontSize.medium};
`;

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
