// react
import React from "react";
import { useParams } from "react-router-dom";

// components
import MoreHeader from "../../components/common/Header/MoreHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import ProfileDetail from "./ProfileDetail";
import styled from "styled-components";
import { Logo } from "./ProfileDetailStyle";
import thread from "../../assets/icons/icon-post-list.svg";
import gallery from "../../assets/icons/icon-post-album.svg";
import Posting from "../../components/Post/Posting";
import bear from "../../assets/images/big-bear.svg";

export default function Profile() {
  const { accountname } = useParams();

  return (
    <div>
      <MoreHeader />
      <ProfileDetail accountname={accountname} />

      <ViewButtonContainer>
        <ViewButton>
          <Logo src={thread} />
        </ViewButton>
        <ViewButton>
          <Logo src={gallery} />
        </ViewButton>
      </ViewButtonContainer>
      {/* ViewButton에 따라 다르게 보여지기 */}
      {/* 쓰레드 버튼 클릭 시 */}
      {/* <Posting /> */}

      {/* 갤러리 버튼 클릭 시  -> map으로 처리 */}
      <GalleryContainer>
        {/* 나중에 Link로 변경해야 될 듯? */}
        <ThumbnailButton>
          <Thumbnail src={bear} alt="썸네일 이미지" />
        </ThumbnailButton>
      </GalleryContainer>

      <Navbar />
    </div>
  );
}

export const ViewButtonContainer = styled.header`
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  margin-top: 28px;
`;

export const ViewButton = styled.button`
  width: 195px;
  height: 44px;
`;

export const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 13px;
  padding: 28px 17px;
`;

export const ThumbnailButton = styled.button`
  background-color: ${(props) => props.theme.colors.placeHolderColor};
  border-radius: 8px;
  object-fit: cover;
`;

export const Thumbnail = styled.img`
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;
