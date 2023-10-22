import styled from "styled-components";

export const Button = styled.button`
  width: 78px;
`;

export const Title = styled.div`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
  margin-top: 4px;
`;

export const Logo = styled.img`
  width: 25px;
  height: 25px;
`;

export const NewsLetter = styled.img`
  width: 50px;
  height: 50px;
`;
