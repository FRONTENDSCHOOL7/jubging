import { userInfoAtom } from "../../recoil/userAtom";
import { useRecoilValue } from "recoil";

import { Wrapper, Title, MapCanvas } from "./PathDrawStyle";
import KakaoMap from "../../components/Map/KakaoMapEdit";
import Header from "../../components/common/Header/Header";

const PathDrawEdit = ({ nickname }) => {
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
          <KakaoMap />
        </MapCanvas>
      </Wrapper>
    </>
  );
};

export default PathDrawEdit;
