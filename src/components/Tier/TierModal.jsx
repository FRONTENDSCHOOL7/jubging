import ReactDom from "react-dom";

import seed from "../../assets/images/seed.webp";
import sprout from "../../assets/images/sprout.webp";
import leaf from "../../assets/images/leaf.webp";
import branch from "../../assets/images/branch.webp";
import tree from "../../assets/images/tree.webp";
import fruit from "../../assets/images/fruit.webp";

import { ModalBackground } from "../common/Modal/ModalStyle";
import {
  TierContainer,
  TierDistanse,
  TierImageBox,
  TierModalContent,
  TierModalTitle,
  TierTitle,
} from "./TierModalStyle";
import { useState } from "react";

export default function TierModal({ isOpen, children, onClose }) {
  if (isOpen === false) {
    return null;
  }

  return ReactDom.createPortal(
    <ModalBackground onClick={onClose}>
      <TierModalContent onClick={(e) => e.stopPropagation()}>
        <TierModalTitle>플로깅 등급표</TierModalTitle>
        {children}
      </TierModalContent>
    </ModalBackground>,
    document.getElementById("alert-root")
  );
}

export function InfoTierModal() {
  const [tierImg, setTierImg] = useState([
    { img: seed, title: "씨앗", ditance: "0~49Km" },
    { img: sprout, title: "새싹", ditance: "50~499Km" },
    { img: leaf, title: "잎새", ditance: "500~1499Km" },
    { img: branch, title: "가지", ditance: "1500~4999Km" },
    { img: tree, title: "나무", ditance: "5000~9999Km" },
    { img: fruit, title: "열매", ditance: "10000Km" },
  ]);

  return (
    <TierContainer>
      {tierImg.map((data) => (
        <TierImageBox>
          <img src={data.img} alt={`${data.title} 등급`} />
          <TierTitle>{data.title}</TierTitle>
          <TierDistanse>{data.ditance}</TierDistanse>
        </TierImageBox>
      ))}
    </TierContainer>
  );
}
