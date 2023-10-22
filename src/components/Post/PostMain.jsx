import React from "react";

function PostMain({ postImage }) {
  return (
    <div className="postMain">
      <img src={postImage} alt="게시글 이미지" />
    </div>
  );
}

export default PostMain;
