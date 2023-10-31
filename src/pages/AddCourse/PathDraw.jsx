import React from "react";
import UploadHeader from "../../components/common/Header/UploadHeader";
import Navbar from "../../components/common/Navbar/Navbar";
import Kakao from "../../components/kakaomap/KakaoMap";
import { Wrapper, Title, MapCanvas } from "./PathDrawStyle";

const PathDraw = ({ nickname }) => {
  return (
    <>
      <UploadHeader />
      <Wrapper>
        <Title>
          {nickname} 님 만의 <br />
          플로깅 코스를 입력해주세요.
        </Title>
        <MapCanvas>
          <Kakao />
        </MapCanvas>
      </Wrapper>
      <Navbar />
    </>
  );
};

export default PathDraw;
