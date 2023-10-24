import React from "react";
import FollowerHeader from "../../components/common/Header/FollowerHeader";
import UserListBox from "../../components/common/UserList/UserListBox";
import ButtonContainer from "../../components/common/Button/ButtonContainer";

export default function Followrs() {
  return (
    <>
      <FollowerHeader />
      <UserListBox>
        <ButtonContainer width={"65px"} height={"28px"} bgColor={"#40A6DE"}>
          팔로우
        </ButtonContainer>
      </UserListBox>
    </>
  );
}
