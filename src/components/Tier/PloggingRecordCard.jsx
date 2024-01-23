import useTier from "../../hook/useTier";
import useModal from "../../hook/useModal";

import bear from "../../assets/images/big-bear.svg";
import {
  CardContainer,
  ContentContainer,
  ContentDetail,
  ContentTitle,
  ImageContainer,
  TierCardImage,
  TierContainer,
  TierInfoBtn,
} from "./PloggingRecordCardStyle";

import TierModal, { InfoTierModal } from "./TierModal";
import A11yHidden from "../common/A11yHidden/A11yHidden";

function PloggingRecordCard({ accumulate }) {
  const { tier, tierImage, nextTier, nextTierDistance } = useTier(accumulate);
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();
  return (
    <>
      <CardContainer>
        <h2>
          <A11yHidden>플로깅 등급 정보</A11yHidden>
        </h2>
        <ImageContainer>
          <TierCardImage src={tierImage} alt={`${tier} 등급 이미지`} />
        </ImageContainer>
        <ContentContainer>
          <div>
            <TierContainer>
              <ContentTitle>등급</ContentTitle>
              <TierInfoBtn onClick={handleOpenModal}>
                <A11yHidden>모든 플로깅 등급 정보 보기</A11yHidden>
              </TierInfoBtn>
            </TierContainer>
            <ContentDetail>{tier}</ContentDetail>
          </div>
          <div>
            <ContentTitle>누적 거리</ContentTitle>
            <ContentDetail>{accumulate}Km</ContentDetail>
          </div>
          <ContentDetail>
            <img src={bear} alt="플로깅하는 곰" />
            {nextTier}까지 {nextTierDistance}Km 남았어요
          </ContentDetail>
        </ContentContainer>
      </CardContainer>

      <TierModal isOpen={isModalOpen} onClose={handleCloseModal}>
        <InfoTierModal />
      </TierModal>
    </>
  );
}

export default PloggingRecordCard;
