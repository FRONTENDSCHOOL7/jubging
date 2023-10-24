import React from "react";
import MoreButton from "../../common/Button/MoreButton";
import UserListBox from "../../common/UserList/UserListBox";
import { PostHeaderContaniner } from "./PostHeaderStyle";

export default function PostHeader() {
  return (
    <PostHeaderContaniner>
      <UserListBox />
      <MoreButton />
    </PostHeaderContaniner>
  );
}
