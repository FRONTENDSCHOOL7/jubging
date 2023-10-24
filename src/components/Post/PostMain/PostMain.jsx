import React from "react";
import { PostContainer, PostImages, PostText } from "./PostMainStyle";

function PostMain({ postImage, postText }) {
  return (
    <PostContainer>
      <PostImages>
        <img src={postImage} alt="게시글 이미지" />
      </PostImages>
      <PostText>
        {postText}옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
        뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
        풍부하게 뛰노는 인생의 힘있다.
      </PostText>
    </PostContainer>
  );
}

export default PostMain;
