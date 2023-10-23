import React from "react";
import iconLike from "../../assets/icons/icon-like.svg";
import NewsLetterFooterStyle from "./NewsLetterFooterStyle";

function NewsLetterFooter({ postText, likes, postDate }) {
  const {
    NLFooterGroup,
    NLText,
    BtnInfo,
    BtnGroup,
    LikeGroup,
    LikeIcon,
    LikeCnt,
    NLDate
  } = NewsLetterFooterStyle;

  return (
    <NLFooterGroup>
      <NLText>{postText}</NLText>
      <BtnInfo>
        <BtnGroup>
          <LikeGroup>
            <LikeIcon src={iconLike} alt="icon-like" />
            <LikeCnt>{likes}</LikeCnt>
          </LikeGroup>
        </BtnGroup>
        <NLDate>{postDate}</NLDate>
      </BtnInfo>
    </NLFooterGroup>
  );
}

export default NewsLetterFooter;