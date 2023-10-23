import React from "react";
import PostHeader from "./PostHeader";
import PostMain from "./PostMain";
import PostFooter from "./PostFooter";

function Post(props) {
  return (
    <section>
      <PostHeader
        profilePhoto={props.profilePhoto}
        nickname={props.nickname}
        userId={props.userId}
      />
      <PostMain postImage={props.postImage} />
      <PostFooter
        postText={props.postText}
        likes={props.likes}
        comments={props.comments}
        postDate={props.postDate}
      />
    </section>
  );
}

export default Post;

이럴 댄 깃모지 머 달아야 하나요