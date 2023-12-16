import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  padding-left: 64px;
  padding-right: 23px;
`;

export const PostImages = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.placeHolderColor};
  overflow: hidden;

  img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
`;

export const PostText = styled.p`
  margin-top: 12px;
  word-break: break-all;
  white-space: pre-line;
  color: ${(props) => props.theme.colors.blackColor};
  font-size: ${(props) => props.theme.fontSize.medium};
  letter-spacing: -0.28px;
  line-height: 18px;
  font-family: "GmarketSansLight";
`;
