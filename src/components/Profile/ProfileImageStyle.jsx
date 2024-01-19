import styled from "styled-components";
import baseprofile from "../../assets/images/base-profile.webp";
import profileicon from "../../assets/icons/icon-photo.svg";

export const Container = styled.article`
  position: relative;
  width: 110px;
  height: 110px;
  margin: 37px auto;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 50%;
`;

export const UserImage = styled.img.attrs((props) => ({
  src: props.$profileImage || baseprofile,
}))`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ImageButton = styled.button`
  background: url(${profileicon}) no-repeat center center;
  width: 36px;
  height: 36px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 999;
`;
