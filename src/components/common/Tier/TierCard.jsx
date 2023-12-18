import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import baseprofile from "../../../assets/images/bear-face.png";
import Button from "../Button/Button";

import {
  TierCardContainer,
  ImageContainer,
  TierCardImage,
  ContentContainer,
  TierName,
  DistanseInfo,
} from "./TierCardStyle";

export default function TierCard({ accumulate, accountname }) {
  const navigate = useNavigate();
  const [acc, setAcc] = useState(0);
  const [tier, setTier] = useState("");

  useEffect(() => {
    setAcc(accumulate);

    if (acc < 50) {
      setTier("씨앗");
    } else if (50 <= acc && acc < 500) {
      setTier("새싹");
    } else if (500 <= acc && acc < 1500) {
      setTier("잎새");
    } else if (1500 <= acc && acc < 5000) {
      setTier("가지");
    } else if (5000 <= acc && acc < 7500) {
      setTier("플레티넘");
    } else if (7500 <= acc && acc < 10000) {
      setTier("다이아몬드");
    } else if (acc >= 10000) {
      setTier("챌린저");
    }

    switch (true) {
      case acc < 50:
        setTier("씨앗");
        break;
      case acc < 500:
        setTier("새싹");
        break;
      case acc < 1500:
        setTier("잎새");
        break;
      case acc < 5000:
        setTier("가지");
        break;
      case acc < 10000:
        setTier("나무");
        break;
      default:
        setTier("열매");
    }
  }, [accumulate, acc]);

  return (
    <TierCardContainer>
      <ImageContainer>
        <TierCardImage src={baseprofile}></TierCardImage>
      </ImageContainer>
      <ContentContainer>
        <TierName>플로깅 {tier}</TierName>
        <DistanseInfo>누적거리 : {accumulate}Km</DistanseInfo>
        <Button
          type="button"
          size="sm"
          variant="white"
          onClick={() => navigate(`/ploggingrecord/${accountname}`)}
        >
          기록 보러가기 {`>`}
        </Button>
      </ContentContainer>
    </TierCardContainer>
  );
}
