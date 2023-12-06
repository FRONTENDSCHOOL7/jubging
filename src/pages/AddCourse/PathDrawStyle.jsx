import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  margin: 0 0 20px 20px;
  text-align: left;
  color: ${(props) => props.theme.colors.blackColor};
  line-height: 18px;
`;

export const MapCanvas = styled.section`
  border-radius: 4px;
  width: 100%;
  background-color: #f2f2f2;

  Button {
    width: 100%;
    border-radius: 0;
  }
`;
