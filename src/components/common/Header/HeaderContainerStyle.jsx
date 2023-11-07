import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: ${(props) => (props.$justisfy ? props.$justisfy : "")};
  align-items: center;
  position: sticky;
  top: 0;
  height: 52px;
  color: ${(props) => props.theme.colors.blackColor};
  font-size: ${(props) => props.theme.fontSize.medium};
  border-bottom: 1px solid ${(props) => props.theme.colors.placeHolderColor};
  background-color: #ffffff;
  z-index: 999;
`;
