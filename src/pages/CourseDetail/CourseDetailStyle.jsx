import styled from 'styled-components';

export const Title = styled.h1`
  margin-top: 22px;
  margin-left: 22.9px;
  text-align: left;
  font-size: 16px;
  color: ${(props) => props.theme.colors.blackColor};
  line-height: 20px;
`;

export const Label = styled.h3`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.textColor};
  margin-left: 33px;
`;

export const Detail = styled.span`
  margin-bottom: 13px;
  margin-top: 9px;
  margin-left: 33px;
  color: ${(props) => props.theme.colors.blackColor};
  font-size: ${(props) => props.theme.fontSize.small};
`;

export const MapCanvas = styled.div`
  margin: 23px 28px;
  height: 204px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.placeHolderColor};
`;