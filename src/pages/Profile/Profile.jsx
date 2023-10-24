import React from "react";
import MoreHeader from "../../components/common/Header/MoreHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import ProfileDetail from "./ProfileDetail";
import styled from "styled-components";
import { Logo } from "./ProfileDetailStyle";
import thread from "../../assets/icons/icon-post-list.svg";
import gallery from "../../assets/icons/icon-post-album.svg";

export const ViewButtonContainer = styled.div`
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
  margin-top: 28px;
`;

export const ViewButton = styled.button`
  width: 195px;
  height: 44px;
`;

export default function Profile() {
  return (
    <div>
      <MoreHeader />
      <ProfileDetail />
      <ViewButtonContainer>
        <ViewButton>
          <Logo src={thread} />
        </ViewButton>
        <ViewButton>
          <Logo src={gallery} />
        </ViewButton>
      </ViewButtonContainer>
      <Navbar />
    </div>
  );
}
