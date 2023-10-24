import React from "react";
import PostFooterStyle from "./PostFooterStyle";
import iconLike from "../../../assets/icons/icon-like.svg";

function NewsPostFooter({ likes, comments, postDate }) {
  const { PostFooterGroup, BtnGroup, LikeGroup, LikeIcon, LikeCnt, PostDate } =
    PostFooterStyle;

  return (
    <PostFooterGroup>
      <BtnGroup>
        <LikeGroup>
          <LikeIcon src={iconLike} alt="icon-like" />
          <LikeCnt>{likes}1</LikeCnt>
        </LikeGroup>
      </BtnGroup>
      <PostDate>{postDate}2020년 10월 21일</PostDate>
    </PostFooterGroup>
  );
}

export default NewsPostFooter;
