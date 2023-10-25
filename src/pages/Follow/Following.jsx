import React from "react";
import FollowingHeader from "../../components/common/Header/FollowingHeader";
import UserListBox from "../../components/common/UserList/UserListBox";
import ButtonContainer from "../../components/common/Button/ButtonContainer";
import styled from "styled-components";

const UserContainer = styled.div`
  margin-top: 25px;
`;

export default function Following() {
  return (
    <>
      <FollowingHeader />
      <UserContainer>
        <UserListBox>
          <ButtonContainer width={"65px"} height={"28px"} bgColor={"#40A6DE"}>
            팔로우
          </ButtonContainer>
        </UserListBox>
      </UserContainer>
    </>
  );
}
