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

function PostFooter({ likes, comments, postDate }) {
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
          <LikeCnt>{likes}</LikeCnt>
        </LikeGroup>
        <Link to="/post">
          <CommentGroup>
            <CommentIcon src={iconComment} alt="icon-chat" />
            <CommentCnt>{comments}</CommentCnt>
          </CommentGroup>
        </Link>
      </BtnGroup>
      <PostDate>{formattedDate}</PostDate>
    </PostFooterGroup>
  );
}

export default PostFooter;
