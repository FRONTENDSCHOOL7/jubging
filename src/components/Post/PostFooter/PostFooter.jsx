import React from "react";
import { Link } from "react-router-dom";
import iconLike from "../../../assets/icons/icon-like.svg";
import iconComment from "../../../assets/icons/icon-chat.svg";
import {
  BtnGroup,
  CommentCnt,
  CommentGroup,
  CommentIcon,
  LikeCnt,
  LikeGroup,
  LikeIcon,
  PostDate,
  PostFooterGroup,
} from "./PostFooterStyle";

function PostFooter({ postId, heartCount, commentCount, postDate }) {
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
        <Link to={`/post/${postId}`}>
          <CommentGroup>
            <CommentIcon src={iconComment} alt="icon-chat" />
            <CommentCnt>{commentCount}</CommentCnt>
          </CommentGroup>
        </Link>
      </BtnGroup>
      <PostDate>{formattedDate}</PostDate>
    </PostFooterGroup>
  );
}

export default PostFooter;
