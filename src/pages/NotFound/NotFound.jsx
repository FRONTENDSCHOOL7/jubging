import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import cryBear from "../../assets/images/crying-bear.svg";
import cryRabbit from "../../assets/images/crying-rabbit.svg";
import cryDog from "../../assets/images/crying-dog.svg";
import ButtonContainer from "../../components/common/Button/ButtonContainer";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <NotFoundPage>
      <ImageBox>
        <CryBear src={cryBear} />
        <CryRabbit src={cryRabbit} />
        <CryDog src={cryDog} />
      </ImageBox>
      <NotFoundText>페이지를 찾을 수 없습니다 :(</NotFoundText>
      <ButtonContainer
        bgColor={"#40A6DE"}
        onClick={() => navigate("/home")}
        hoverFilter
      >
        홈으로 이동하기
      </ButtonContainer>
    </NotFoundPage>
  );
}

const NotFoundPage = styled.div`
  min-height: 100vh;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImageBox = styled.section`
  display: flex;
  position: relative;
`;
const CryBear = styled.img`
  position: relative;
  z-index: -10;
  top: -20px;
  left: 30%;
  width: 94px;
  height: 60px;
`;
const CryRabbit = styled.img`
  position: relative;
  top: -85px;
  left: 5px;
  width: 75px;
  height: 95px;
`;
const CryDog = styled.img`
  position: relative;
  top: 5px;
  right: 70px;
  z-index: -20;
  width: 90px;
  height: 65px;
`;

const NotFoundText = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;
