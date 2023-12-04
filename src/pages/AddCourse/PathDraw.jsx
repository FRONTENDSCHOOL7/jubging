import { userInfoAtom } from "../../recoil/userAtom";
import { useRecoilValue } from "recoil";

import KakaoMap from "../../components/kakaomap/KakaoMap";
import { Wrapper, Title, MapCanvas } from "./PathDrawStyle";
import BackSpaceHeader from "../../components/common/Header/BackSpaceHeader";

const PathDraw = ({ nickname }) => {
  const userInfo = useRecoilValue(userInfoAtom);

  return (
    <>
      <BackSpaceHeader />
      <Wrapper>
        <Title>
          {userInfo.username} 님 만의 <br />
          플로깅 코스를 그려주세요.
        </Title>
        <MapCanvas>
          <KakaoMap />
        </MapCanvas>
      </Wrapper>
    </>
  );
};

export default PathDraw;
