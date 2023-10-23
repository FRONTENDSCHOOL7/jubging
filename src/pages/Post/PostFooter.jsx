import React from "react";
import PostFooterStyle from "./PostFooterStyle"; 
import iconLike from "../../assets/icons/icon-like.svg";
import iconComment from "../../assets/icons/icon-chat.svg";

function PostFooter({ postText, likes, comments, postDate }) {
  const {
    PostFooterGroup,
    PostText,
    BtnInfo,
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
      <PostText>{postText}</PostText>
      <BtnInfo>
        <BtnGroup>
          <LikeGroup>
            <LikeIcon src={iconLike} alt="icon-like" />
            <LikeCnt>{likes}</LikeCnt>
          </LikeGroup>
          <CommentGroup>
            <CommentIcon src={iconComment} alt="icon-chat" />
            <CommentCnt>{comments.length}</CommentCnt>
          </CommentGroup>
        </BtnGroup>
        <PostDate>{postDate}</PostDate>
      </BtnInfo>
    </PostFooterGroup>
  );
}

export default PostFooter;