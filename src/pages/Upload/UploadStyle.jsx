import styled from "styled-components";
import upload from "../../assets/icons/icon-photo.svg";
import close from "../../assets/icons/icon-close.svg";

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
  background: url(${upload}) no-repeat center center / cover;
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

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 3 / 2;
  border: 1px solid #dbdbdb;
  border-radius: 10px;
`;

export const ImgDeleteBtn = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 4px;
  right: 5px;
  background: url(${close}) center center / 1.5rem no-repeat;
`;

export const A11yHidden = styled.span`
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
`;
