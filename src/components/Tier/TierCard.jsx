import { useNavigate } from "react-router-dom";
import useTier from "../../../hook/useTier";

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
  const { tier, tierImage } = useTier(accumulate);

  return (
    <TierCardContainer>
      <ImageContainer>
        <TierCardImage src={tierImage}></TierCardImage>
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
