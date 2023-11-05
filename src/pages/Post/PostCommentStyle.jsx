import styled from "styled-components";

export const CommentGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 17px 0 17px 17px;
`;

export const CommentHeaderGroup = styled.div`
  display: flex;
`;

export const ProfileImage = styled.div`
  width: 42px;
  height: 36px;
  border: 1px solid ${(props) => props.theme.colors.placeHolderColor};
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  color: ${(props) => props.theme.colors.textColor};
  margin-left: 6px;
`;

export const CommentText = styled.p`
  margin-top: 4px;
  margin-left: 46px;
  font-size: ${(props) => props.theme.fontSize.medium};
`;
