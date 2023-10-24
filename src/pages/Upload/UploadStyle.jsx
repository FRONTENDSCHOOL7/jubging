import styled from "styled-components";
import Uploadbtn from "../../assets/icons/icon-photo.svg";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 35px;
`;

export const ImagePreview = styled.img`
  width: 304px;
  object-fit: cover;
  aspect-ratio: 3 / 2;
  border-radius: 10px;
`;

export const TextArea = styled.textarea`
  width: 304px;
  height: 400px;
  overflow: hidden;
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : props.theme.fontSize.medium};
  margin-top: 10px;
`;

export const UploadButton = styled.button`
  position: absolute;
  bottom: 30px;
  right: 16px;
  width: 50px;
  height: 50px;
  background-image: url(${Uploadbtn});
  background-repeat: no-repeat;
  background-position: center center;
`;
