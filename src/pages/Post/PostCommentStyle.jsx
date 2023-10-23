import styled from "styled-components";

export const CommentGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 17px 28px 17px 17px;
`;

export const CommentHeaderGroup = styled.div`
  display: flex;
`;

export const ProfileImage = styled.img`
  width: 36px;
  height: 36px;
  overflow: hidden;
  object-fit: cover;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.colors.placeHolderColor};;
`;

export const CommentInfoGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;
  width: 100%;
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoNickname = styled.h3`
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export const InfoTime = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.textColor};;
  margin-left: 6px;
`;

export const CommentText = styled.p`
  margin-top: 4px;
  margin-left: 42px;
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export const MoreBtn = styled.button`
  background-color: skyblue;
  width: 2px;
  height: 16.66px;
  margin: 5px;
  margin-top: -5px;
  float: right;
`;


const PostCommentStyle = {
  CommentGroup,
  CommentHeaderGroup,
  ProfileImage,
  CommentInfoGroup,
  InfoHeader,
  InfoNickname,
  InfoTime,
  CommentText,
  MoreBtn
};

export default PostCommentStyle;