import { useState } from "react";
import { Link } from "react-router-dom";

import { postDisLike, postLike } from "../../../api/postAPI";

import iconEmptyLike from "../../../assets/icons/icon-like.svg";
import iconFillLike from "../../../assets/icons/icon-fill-like.svg";
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

function PostFooter({ postId, heartCount, hearted, commentCount, postDate }) {
  const token = localStorage.getItem("token");

  const [liked, setLiked] = useState(false);
  const [likeState, setLikeState] = useState(hearted);
  const [likeCount, setLikeCount] = useState(heartCount);

  const data = new Date(postDate);
  const formattedDate = data.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // 게시글 좋아요
  const fetchLike = async () => {
    try {
      const response = await postLike(token, postId);
      setLikeCount(response.post.heartCount);
      setLikeState(true);
    } catch (error) {
      console.log(error);
    }
  };

  // 게시글 좋아요 취소
  const fetchDisLike = async () => {
    try {
      const response = await postDisLike(token, postId);
      setLikeCount(response.post.heartCount);
      setLikeState(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async () => {
    if (liked) {
      await fetchDisLike();
      setLiked(false);
    } else {
      await fetchLike();
      setLiked(true);
    }
  };

  return (
    <PostFooterGroup>
      <BtnGroup>
        <LikeGroup onClick={handleLike}>
          <LikeIcon
            src={likeState ? iconFillLike : iconEmptyLike}
            alt="좋아요 버튼"
          />
          <LikeCnt>{likeCount}</LikeCnt>
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
