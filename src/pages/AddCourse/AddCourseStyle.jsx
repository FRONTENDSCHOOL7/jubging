import styled from "styled-components";

export const Form = styled.div`
  margin: 37px 34px 0;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.large};
  margin-bottom: 23px;
  text-align: left;
  color: ${(props) => props.theme.colors.blackColor};
`;

export const MapCanvas = styled.div`
  border-radius: 4px;
  border: 0.5px solid #dbdbdb;
  background-color: #f2f2f2;
  margin-bottom: 23px;
  padding: 11px;

  h3 {
    margin-bottom: 9px;
    font-size: ${(props) => props.theme.fontSize.small};
    font-weight: bold;
  }

  ul {
    margin-bottom: 9px;
    border-radius: 4px;
    border: 0.5px solid #ffffff;
    background-color: #ffffff;
  }

  li {
    list-style-type: disc;
    font-size: ${(props) => props.theme.fontSize.xsmall};
    font-weight: normal;
    margin: 11px 0 10px 15px;
  }
`;