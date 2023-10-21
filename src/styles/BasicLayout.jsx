import React from "react";
import styled from "styled-components";

const BasicContainer = styled.div`
  margin: 0 auto;
  max-width: 390px;
  min-height: 100vh;
  height: 100%;
  box-shadow: rgb(0 0 0 / 14%) 0px 0px 7px;
`;

const Screen = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const BasicLayout = ({ children }) => {
  return (
    <BasicContainer>
      <Screen>{children}</Screen>
    </BasicContainer>
  );
};

export default BasicLayout;
