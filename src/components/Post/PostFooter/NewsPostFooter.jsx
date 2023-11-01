import React from "react";
import {
  BtnGroup,
  LikeCnt,
  LikeGroup,
  LikeIcon,
  PostDate,
  PostFooterGroup,
} from "./PostFooterStyle";
import iconLike from "../../../assets/icons/icon-like.svg";

function NewsPostFooter({ heartCount, postDate }) {
  const data = new Date(postDate);
  const formattedDate = data.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <PostFooterGroup>
      <BtnGroup>
        <LikeGroup>
          <LikeIcon src={iconLike} alt="icon-like" />
          <LikeCnt>{heartCount}</LikeCnt>
        </LikeGroup>
      </BtnGroup>
      <PostDate>{formattedDate}</PostDate>
    </PostFooterGroup>
  );
}

export default NewsPostFooter;
