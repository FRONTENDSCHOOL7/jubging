import React from "react";
import FollowerHeader from "../../components/common/Header/FollowerHeader";
import UserListBox from "../../components/common/UserList/UserListBox";
import ButtonContainer from "../../components/common/Button/ButtonContainer";
import styled from "styled-components";

const UserContainer = styled.div`
  margin-top: 25px;
`;

export default function Followrs() {
  return (
    <>
      <FollowerHeader />
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
