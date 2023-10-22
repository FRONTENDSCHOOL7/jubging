import React from "react";
import styled from "styled-components";
import profiles from "../../assets/images/bear-face.svg";

const ProfilePhoto = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

const ProfileLink = styled.a`
  display: flex;
`;

const ProfileName = styled.div`
  margin-left: 5px;
  margin-top: 7px;
`;

const Nickname = styled.h3`
  margin: 0;
`;

const UserId = styled.span`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
`;

function PostHeader({ nickname, userId }) {
  return (
    <div className="postHeader">
      <ProfileLink href="#">
        <ProfilePhoto>
          <img src={profiles} alt="프로필 사진" />
        </ProfilePhoto>
        <ProfileName>
          <Nickname>{nickname}</Nickname>
          <UserId>{`@${userId}`}</UserId>
        </ProfileName>
      </ProfileLink>
      <button
        className="moreBtn"
        type="button"
        aria-label="게시글 설정 더보기"
      ></button>
    </div>
  );
}

export default PostHeader;
