import styled from "styled-components";

export const MapCanvas = styled.div`
  height: 100%;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.placeHolderColor};
  width: 100%;
`;
