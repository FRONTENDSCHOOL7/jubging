import styled from "styled-components";

export const Form = styled.form`
  margin: 37px 34px 0;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.large};
  margin-bottom: 41px;
  text-align: center;
  color: ${(props) => props.theme.colors.blackColor};
`;

export const EmailSignUp = styled.p`
  text-align: center;
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
  margin-top: 12px;
`;
