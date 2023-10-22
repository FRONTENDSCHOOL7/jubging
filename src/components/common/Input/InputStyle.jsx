import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const Label = styled.label`
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.colors.textColor};
`;

export const InputField = styled.input`
  margin-top: 13px;
  padding: 0 5px 5px 0;
  border-bottom: ${(props) =>
    props.value.length === 0 ? "1px solid #DBDBDB" : "1px solid #40A6DE"};

  &:focus {
    outline: none;
    border-bottom-color: ${(props) => props.theme.colors.mainColor};
  }
  /* focus 안 넣으면 테두리 선이 삭제가 안됨 */

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
