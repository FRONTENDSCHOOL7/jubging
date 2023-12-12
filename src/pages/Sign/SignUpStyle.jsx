import styled from "styled-components";

export const Form = styled.form`
  margin: 37px 34px 0;

  Button {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.xlarge};
  margin-bottom: 41px;
  text-align: center;
  color: ${(props) => props.theme.colors.blackColor};
`;
