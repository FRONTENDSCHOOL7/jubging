import React from "react";
import { Link } from "react-router-dom";

import UserListBox from "../../components/common/UserList/UserListBox";

// 프로필 사진 추후 컴포넌트 추가 예정
// import PostUserProfileImg from "../../components/common/Profile/ProfileImage";

const Contents = ({ userList, inputTxt }) => {
  console.log(userList);
  console.log(inputTxt, userList);
  return (
    <>
      {userList.map((item) => (
        <UserListBox
          key={userList.id}
          profileImage={item.image}
          userName={item.username}
          accountName={item.accountname}
          inputTxt={inputTxt}
        ></UserListBox>
      ))}
    </>
  );
};

export default Contents;
