import useTier from "../../../hook/useTier";

import bear from "../../../assets/images/big-bear.svg";
import {
  CardContainer,
  ContentContainer,
  ContentDetail,
  ContentTitle,
  TierContainer,
  TierInfoBtn,
} from "./PloggingRecordCardStyle";
import { ImageContainer, TierCardImage } from "./TierCardStyle";

function PloggingRecordCard({ accumulate }) {
  const { tier, tierImage, nextTier, nextTierDistance } = useTier(accumulate);

  return (
    <CardContainer>
      <ImageContainer>
        <TierCardImage src={tierImage} />
      </ImageContainer>
      <ContentContainer>
        <div>
          <TierContainer>
            <ContentTitle>등급</ContentTitle>
            <TierInfoBtn />
          </TierContainer>
          <ContentDetail>{tier}</ContentDetail>
        </div>
        <div>
          <ContentTitle>누적 거리</ContentTitle>
          <ContentDetail>{accumulate}Km</ContentDetail>
        </div>
        <ContentDetail>
          <img src={bear} alt="" />
          {nextTier}까지 {nextTierDistance}Km 남았어요
        </ContentDetail>
      </ContentContainer>
    </CardContainer>
  );
}

export default PloggingRecordCard;
