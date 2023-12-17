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

export default function TierCard({ accumulate }) {
  const navigate = useNavigate();
  const [acc, setAcc] = useState(0);
  const [tier, setTier] = useState("");

  useEffect(() => {
    setAcc(accumulate);

    if (acc < 10) {
      setTier("브론즈");
    } else if (10 <= acc && acc < 50) {
      setTier("실버");
    } else if (50 <= acc && acc < 80) {
      setTier("골드");
    } else if (80 <= acc && acc < 150) {
      setTier("플레티넘");
    } else if (150 <= acc && acc < 300) {
      setTier("다이아");
    } else if (300 <= acc) {
      setTier("챌린저");
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
          onClick={() => navigate(`/`)}
        >
          거리 보러가기 {`>`}
        </Button>
      </ContentContainer>
    </TierCardContainer>
  );
}
