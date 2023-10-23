import React from "react";
import NLContainer from "../NewsLetter/NewsLetterContainer";
import profileImage from "../../assets/images/dog-face.svg";

function NewsLetterPosting() {
  return (
    <div>
      <NLContainer
        profilePhoto = {profileImage}
        nickname = "Jupging"
        userId = "jubging_official"
        postImage = "게시글 이미지 URL"
        postText = "게시글 내용"
        likes = {0}
        comments = {["나는 카피 맨 ~"]}
        postDate = "2023년 10월 22일"
      />
    </div>
  );
}

export default NewsLetterPosting;