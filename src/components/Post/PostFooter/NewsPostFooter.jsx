import { useState } from "react";

import { postDisLike, postLike } from "../../../api/postAPI";

import iconEmptyLike from "../../../assets/icons/icon-like.svg";
import iconFillLike from "../../../assets/icons/icon-fill-like.svg";
import {
  BtnGroup,
  LikeCnt,
  LikeGroup,
  LikeIcon,
  PostDate,
  PostFooterGroup,
} from "./PostFooterStyle";

function NewsPostFooter({ postId, heartCount, hearted, postDate }) {
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

  // 뉴스레터 게시글 좋아요
  const fetchLike = async () => {
    try {
      const response = await postLike(token, postId);
      setLikeCount(response.post.heartCount);
      setLikeState(true);
    } catch (error) {
      console.log(error);
    }
  };

  // 뉴스레터 게시글 좋아요 취소
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
      </BtnGroup>
      <PostDate>{formattedDate}</PostDate>
    </PostFooterGroup>
  );
}

export default NewsPostFooter;
