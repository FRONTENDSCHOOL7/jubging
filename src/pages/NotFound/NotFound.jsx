import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import cryBear from "../../assets/images/crying-bear.webp";
import cryRabbit from "../../assets/images/crying-rabbit.webp";
import cryDog from "../../assets/images/crying-dog.webp";
import Button from "../../components/common/Button/Button";

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
      <Button size="md" variant="primary" onClick={() => navigate("/home")}>
        홈으로 이동하기
      </Button>
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
  top: -20px;
  left: 30%;
  width: 94px;
  height: 60px;
  z-index: 10;
`;
const CryRabbit = styled.img`
  position: relative;
  top: -85px;
  left: 5px;
  width: 75px;
  height: 95px;
  z-index: 20;
`;
const CryDog = styled.img`
  position: relative;
  top: 5px;
  right: 70px;
  width: 90px;
  height: 65px;
`;

const NotFoundText = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;
