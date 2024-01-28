import { useNavigate } from "react-router-dom";
import useTier from "../../hook/useTier";

import Button from "../common/Button/Button";
import {
  TierCardContainer,
  ImageContainer,
  TierCardImage,
  ContentContainer,
  TierName,
  DistanseInfo,
} from "./TierCardStyle";
import A11yHidden from "../common/A11yHidden/A11yHidden";

export default function TierCard({ accumulate, accountname }) {
  const navigate = useNavigate();
  const { tier, tierImage } = useTier(accumulate);

  return (
    <TierCardContainer>
      <h3>
        <A11yHidden>플로깅 티어 정보</A11yHidden>
      </h3>
      <ImageContainer>
        <TierCardImage
          src={tierImage}
          alt={`${tier} 등급 이미지`}
        ></TierCardImage>
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
