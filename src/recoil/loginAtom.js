import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

//
const { persistAtom } = recoilPersist();

export const loginAtom = atom({
  key: "loginAtom",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

// useRecoilValue : 값 읽기 전용
// useSetRecoilState : 값 변경 전용

// useRecoilState : 값 읽기, 변경 전용

// selector :
