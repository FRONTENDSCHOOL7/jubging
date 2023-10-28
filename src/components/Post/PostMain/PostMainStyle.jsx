import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  padding-left: 64px;
  padding-right: 23px;
  margin-top: 16px;
`;

export const PostImages = styled.div`
  width: 100%;
  height: 228px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.placeHolderColor};
  overflow: hidden;

  img {
    width: 100%;
    aspect-ratio: 304 / 228;
    object-fit: cover;
  }
`;

export const PostText = styled.p`
  margin-top: 16px;
  color: ${(props) => props.theme.colors.blackColor};
  font-size: ${(props) => props.theme.fontSize.medium};
  letter-spacing: -0.28px;
  line-height: 18px;
  font-family: "GmarketSansLight";
`;
