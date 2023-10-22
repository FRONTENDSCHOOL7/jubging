import React from "react";

function PostFooter({ postText, likes, comments, postDate }) {
  return (
    <div className="postFooter">
      <p className="postDetail">{postText}</p>
      <div className="btnArea">
        <button className="likeBtn" aria-label="좋아요">
          <img src="icon-like.png" alt="icon-like" />
          <span>{likes}</span>
        </button>
        <button className="postChat" aria-label="게시글 댓글">
          <img src="icon-chat.png" alt="icon-chat" />
          <span>{comments.length}</span>
        </button>
      </div>
      <span className="postDate">{postDate}</span>
    </div>
  );
}

export default PostFooter;
