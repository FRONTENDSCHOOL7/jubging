// react
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// API
import { getUserProfile } from "../../api/profileAPI";

// atom
import { userInfoAtom } from "../../recoil/userAtom";

// recoil
import { useRecoilValue } from "recoil";

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

import useModalControl from "../../hook/useModalControl";
import { Modal } from "../../components/common/Modal/Modal";

export default function Profile() {
  const { accountname } = useParams();
  const { ModalComponent } = useModalControl("Profile");

  const userInfo = useRecoilValue(userInfoAtom);
  const [profile, setProfile] = useState({});

  // 개인프로필 가져오기
  useEffect(() => {
    const fetchUserInfo = async () => {
      const response = await getUserProfile(accountname);

      if (response && response.profile) {
        setProfile(response.profile);
      }
      return response.profile;
    };
    fetchUserInfo();
  }, []);

  // modal test 메서드
  const modify = () => {
    console.log("modify");
  };

  const logout = () => {
    console.log("logout");
  };

  return (
    <>
      <MoreHeader pageName="Profile" />
      <ProfileDetail profile={profile} />

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

      <ModalComponent>
        {userInfo.accountname === profile.accountname ? (
          <>
            <Modal contents={["수정"]} handleFunc={modify}></Modal>
            <Modal contents={["로그아웃"]} handleFunc={logout}></Modal>
          </>
        ) : (
          <Modal
            contents={["신고하기"]}
            handleFunc={() => {
              console.log("no");
            }}
          ></Modal>
        )}
      </ModalComponent>
    </>
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
