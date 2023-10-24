import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 30px;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.medium};
  margin-bottom: 27px;
  margin-left: 29px;
  text-align: left;
  color: ${(props) => props.theme.colors.blackColor};
  line-height: 18px;
`;

export const MapCanvas = styled.div`
  border-radius: 4px;
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
`;