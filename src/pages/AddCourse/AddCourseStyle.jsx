import styled from "styled-components";

export const Form = styled.form``;

export const Title = styled.h1`
  font-size: 1.3rem;
  padding: 22px 30px 0;
  margin-bottom: 15px;
  text-align: left;
  color: ${(props) => props.theme.colors.blackColor};
`;

export const MapCanvas = styled.section`
  border-radius: 4px;
  border: 0.5px solid #dbdbdb;
  background-color: #f2f2f2;
  margin: 0 30px 26px;
  padding: 9px;
  height: 195px;

  h3 {
    margin-bottom: 10px;
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

export const InputContainer = styled.section`
  padding: 0 30px;
`;
