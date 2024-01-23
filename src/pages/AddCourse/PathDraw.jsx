import { userInfoAtom } from "../../recoil/userAtom";
import { useRecoilValue } from "recoil";

import { Wrapper, Title, MapCanvas } from "./PathDrawStyle";
import KakaoMap from "../../components/Map/KakaoMap";
import Header from "../../components/common/Header/Header";
import A11yHidden from "../../components/common/A11yHidden/A11yHidden";

const PathDraw = ({ nickname }) => {
  const userInfo = useRecoilValue(userInfoAtom);

  return (
    <>
      <Header>경로 등록</Header>
      <Wrapper>
        <Title>
          {userInfo.username} 님 만의 <br />
          플로깅 코스를 그려주세요.
        </Title>
        <MapCanvas>
          <h3>
            <A11yHidden>경로 그리기</A11yHidden>
          </h3>
          <KakaoMap />
        </MapCanvas>
      </Wrapper>
    </>
  );
};

export default PathDraw;
