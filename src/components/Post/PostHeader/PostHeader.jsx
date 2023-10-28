import React from "react";
import MoreButton from "../../common/Button/MoreButton";
import UserListBox from "../../common/UserList/UserListBox";
import { PostHeaderContaniner } from "./PostHeaderStyle";

export default function PostHeader({
  profileImage,
  userName,
  accountName,
  pageName,
}) {
  return (
    <PostHeaderContaniner>
      <UserListBox
        profileImage={profileImage}
        userName={userName}
        accountName={accountName}
      />
      <MoreButton pageName={pageName} />
    </PostHeaderContaniner>
  );
}
