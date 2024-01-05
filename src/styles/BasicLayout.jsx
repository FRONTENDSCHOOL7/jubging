import styled from "styled-components";
import intro from "../assets/images/intro-qr.png";

const BasicContainer = styled.div`
  position: relative;
  margin: 0 auto;
  min-height: 100vh;
  height: 100%;
  box-shadow: rgb(0 0 0 / 14%) 0px 0px 7px;
  background-color: ${(props) => props.theme.colors.whiteColor};

  @media screen and (min-width: 769px) {
    max-width: 390px;
  }
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const Intro = styled.aside`
  @media screen and (max-width: 1200px) {
    display: none;
  }

  position: fixed;
  top: 50%;
  right: calc(50% - 390px - 13rem);
  width: 294px;
  height: 276px;
  transform: translateY(-50%);
  z-index: 1;
`;

const BasicLayout = ({ children }) => {
  return (
    <>
      <BasicContainer>
        <Screen>{children}</Screen>
      </BasicContainer>
      <Intro>
        <img src={intro} alt="줍깅 소개 및 qr" />
      </Intro>
    </>
  );
};

export default BasicLayout;
