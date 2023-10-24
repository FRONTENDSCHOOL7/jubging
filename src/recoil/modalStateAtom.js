import { atom, atomFamily } from "recoil";

const modalStateAtomFamily = atomFamily({
  key: "modalStateAtomFamily",
  default: false,
});

export default modalStateAtomFamily;
