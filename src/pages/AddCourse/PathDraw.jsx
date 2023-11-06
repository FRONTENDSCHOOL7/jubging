import React from "react";

import { userInfoAtom } from "../../recoil/userAtom";
import { useRecoilValue } from "recoil";

import Navbar from "../../components/common/Navbar/Navbar";
import Kakao from "../../components/kakaomap/KakaoMap";
import { Wrapper, Title, MapCanvas } from "./PathDrawStyle";

const PathDraw = ({ nickname }) => {
  const kakaoMap = Kakao();
  const userInfo = useRecoilValue(userInfoAtom);

  return (
    <>
      <Wrapper>
        <Title>
          {userInfo.username} 님 만의 <br />
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
