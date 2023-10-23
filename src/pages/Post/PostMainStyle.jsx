import styled from "styled-components";

export const PostImages = styled.div`
  background-color: ${(props) => props.theme.colors.placeHolderColor};
  overflow: hidden;
  height: 228px;
  border-radius: 10px;
  margin-left: 15%;
  margin-right: 23px;
`;

const PostMainStyle = {
  PostImages,
};

export default PostMainStyle