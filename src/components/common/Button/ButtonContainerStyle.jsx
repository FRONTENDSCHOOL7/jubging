import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.width ? props.width : "120px")};
  height: ${(props) => (props.height ? props.height : "44px")};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : props.theme.colors.disabledColor};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  border-radius: 30px;
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : props.theme.fontSize.small};
`;
