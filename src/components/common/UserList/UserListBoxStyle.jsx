import styled from "styled-components";

export const Contanier = styled.button`
  display: flex;
  align-items: center;

  width: 100%;

  /* margin-top: 25px; */
  padding-left: 16px;
  /* padding-top: 16px; */

  /* margin-bottom: 16px; */

  /* background-color: red; */
`;

export const Image = styled.img`
  display: block;
  width: 42px;
  height: 42px;
  margin-right: 5px;

  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  border: 1px solid black;
  border-radius: 50%;
`;

export const Section = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: auto;
`;

export const UserName = styled.p`
  margin-bottom: 6px;
  color: ${(props) => props.theme.colors.blackColor};
  font-size: ${(props) => props.theme.fontSize.medium};
`;
export const SubText = styled.p`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.small};
`;
