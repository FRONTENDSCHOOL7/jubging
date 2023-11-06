import styled from "styled-components";

export const InputField = styled.input`
  width: 284px;
  height: 37px;
  padding: 0 15px;
  border-radius: 20px;
  border: ${(props) =>
    props.value.length === 0 ? "1px solid #DBDBDB" : "1px solid #40A6DE"};

  &:focus {
    outline: ${(props) => props.theme.colors.mainColor};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.placeHolderColor};
    font-size: ${(props) => props.theme.fontSize.small}; //
  }
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.alertColor};
  font-size: ${(props) => props.theme.fontSize.small};
  margin-top: 0.5em; // space above the error message
`;
