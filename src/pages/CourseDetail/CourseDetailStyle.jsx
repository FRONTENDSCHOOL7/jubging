import styled from "styled-components";

export const Title = styled.h1`
  margin: 22px 24px 0;
  text-align: left;
  font-size: 16px;
  color: ${(props) => props.theme.colors.blackColor};
  line-height: 20px;
  display: flex;
`;

export const Container = styled.section`
  padding: 13px 30px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Label = styled.h3`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.textColor};
  border-bottom: 1px solid ${(props) => props.theme.colors.placeHolderColor};
  padding-bottom: 5px;
`;

export const Detail = styled.p`
  color: ${(props) => props.theme.colors.blackColor};
  font-size: ${(props) => props.theme.fontSize.medium};
  padding-top: 5px;
`;

export const MapCanvas = styled.section`
  margin: 23px 28px;
  height: 204px;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.placeHolderColor};
`;
