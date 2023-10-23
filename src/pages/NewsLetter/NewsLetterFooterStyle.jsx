import styled from "styled-components";

export const NLFooterGroup = styled.div`
  margin-top: 16px;
  margin-left: 15%;
  margin-right: 23px;
`;

export const NLText = styled.p`
  color: ${(props) => props.theme.colors.blackColor};
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export const BtnInfo = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const BtnGroup = styled.div`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.textColor};
  display: flex;
  height: 17.4px;
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

export const NLDate = styled.span`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.medium};
`;

const NewsLetterFooterStyle = {
  NLFooterGroup,
  NLText,
  BtnInfo,
  BtnGroup,
  LikeGroup,
  LikeIcon,
  LikeCnt,
  NLDate
};

export default NewsLetterFooterStyle;