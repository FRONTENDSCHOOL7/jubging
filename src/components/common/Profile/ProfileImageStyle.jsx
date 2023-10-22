import styled from "styled-components";

export const UserImage = styled.img`
  margin: 30px 103px 35px;
  width: 110px;
  height: 110px;
  border: 1px solid;
  border-radius: 50%;
  border-color: ${(props) => props.theme.colors.blackColor};
  object-fit: cover;
`;

export const Title = styled.h1``;
