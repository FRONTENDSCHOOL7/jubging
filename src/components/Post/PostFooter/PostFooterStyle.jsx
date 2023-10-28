import styled from "styled-components";

export const PostFooterGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 23px 25px 0;
`;

export const BtnGroup = styled.div`
  display: flex;
  align-items: center;
  padding-left: 64px;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.textColor};
`;

export const LikeGroup = styled.button`
  display: flex;
  margin-right: 18px;
  align-items: center;
`;

export const LikeIcon = styled.img`
  width: 19px;
`;

export const LikeCnt = styled.span`
  margin-left: 4px;
`;

export const CommentGroup = styled.button`
  display: flex;
  align-items: center;
`;

export const CommentIcon = styled.img`
  width: 19px;
`;

export const CommentCnt = styled.span`
  margin-left: 4px;
`;

export const PostDate = styled.span`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.xsmall};
`;
