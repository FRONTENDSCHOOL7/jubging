import React from "react";
import styled from "styled-components";

import UserListBox from "../../components/common/UserList/UserListBox";

// 프로필 사진 추후 컴포넌트 추가 예정
// import PostUserProfileImg from "../../components/common/Profile/ProfileImage";

const Contents = ({ userList, inputTxt }) => {
  return (
    <UerListContainer>
      {userList.map((item) => (
        <UserListBox
          key={userList.id}
          profileImage={item.image}
          userName={item.username}
          accountName={item.accountname}
          inputTxt={inputTxt}
        />
      ))}
    </UerListContainer>
  );
};

const UerListContainer = styled.section`
  padding: 16px 16px 60px 0;

  a {
    margin-bottom: 16px;
  }
`;

export default Contents;
