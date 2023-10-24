import React from "react";
import MoreButton from "../../common/Button/MoreButton";
import UserListBox from "../../common/UserList/UserListBox";
import { PostHeaderContaniner } from "./PostHeaderStyle";

export default function PostHeader(props) {
  return (
    <PostHeaderContaniner>
      <UserListBox />
      <MoreButton pageName={props.pageName} />
    </PostHeaderContaniner>
  );
}
