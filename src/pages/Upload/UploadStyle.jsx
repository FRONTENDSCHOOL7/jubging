import styled from "styled-components";
import Uploadbtn from "../../assets/icons/icon-photo.svg";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 340px;
  margin: 20px auto 0;
`;

export const ImagePreview = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 3 / 2;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 420px;
  overflow: hidden auto;
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : props.theme.fontSize.medium};
  margin: 20px 0 100px;

  &::placeholder {
    color: ${(props) => props.theme.colors.placeHolderColor};
  }
`;

export const ImgUploadButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 16px;
  width: 50px;
  height: 50px;
  background: url(${Uploadbtn}) no-repeat center center / cover;
`;

export const ImgLabel = styled.label`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;
