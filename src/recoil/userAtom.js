import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

//
const { persistAtom } = recoilPersist();

// 사용자 정보 불러오기
export const userInfoAtom = atom({
  key: "userInfoAtom",
  default: {
    username: "",
    accountname: "",
    intro: "",
    image: "",
  },
  effects_UNSTABLE: [persistAtom],
});

// default에 들어가는 값은 해당 상태가 표현하는 데이터의 초기 상태나, 데이터가 아직 준비되지 않았을 때의 상태를 나타내는 값이어야 합니다.
