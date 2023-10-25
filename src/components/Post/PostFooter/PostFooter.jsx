import React from "react";
import PostFooterStyle from "./PostFooterStyle";
import iconLike from "../../../assets/icons/icon-like.svg";
import iconComment from "../../../assets/icons/icon-chat.svg";
import { Link } from "react-router-dom";

function PostFooter({ likes, comments, postDate }) {
  const {
    PostFooterGroup,
    BtnGroup,
    LikeGroup,
    LikeIcon,
    LikeCnt,
    CommentGroup,
    CommentIcon,
    CommentCnt,
    PostDate,
  } = PostFooterStyle;

  return (
    <PostFooterGroup>
      <BtnGroup>
        <LikeGroup>
          <LikeIcon src={iconLike} alt="icon-like" />
          <LikeCnt>{likes}1</LikeCnt>
        </LikeGroup>
        <Link to="/post">
          <CommentGroup>
            <CommentIcon src={iconComment} alt="icon-chat" />
            <CommentCnt>{comments}1</CommentCnt>
          </CommentGroup>
        </Link>
      </BtnGroup>
      <PostDate>{postDate}2020년 10월 21일</PostDate>
    </PostFooterGroup>
  );
}

export default PostFooter;
