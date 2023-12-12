import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 10px;
  color: ${(props) => props.theme.colors.blackColor};
  font-size: ${(props) => props.theme.fontSize.large};
  border-bottom: 1px solid ${(props) => props.theme.colors.placeHolderColor};
  background-color: #ffffff;
  z-index: 999;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: ${(props) => props.theme.fontSize.large};
    padding-left: 5px;
  }
`;

export const SearchBar = styled.input`
  width: 325px;
  height: 30px;
  border-radius: 32px;
  padding: 0 10px;
  background-color: #f2f2f2;
  font-size: ${(props) => props.theme.fontSize.medium};

  &::placeholder {
    color: ${(props) => props.theme.colors.placeHolderColor};
    font-size: ${(props) => props.theme.fontSize.medium};
  }

  &:focus {
    outline: none;
  }
`;
