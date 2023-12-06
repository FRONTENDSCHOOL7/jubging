import styled from "styled-components";

export const Form = styled.form`
  margin: 37px 34px 0;

  Button {
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.large};
  margin-bottom: 12px;
  text-align: center;
  color: ${(props) => props.theme.colors.blackColor};
`;

export const Selfchange = styled.h2`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.textColor};
  text-align: center;
  margin-bottom: 30px;
`;
