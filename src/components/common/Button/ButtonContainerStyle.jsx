import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.$width ? props.$width : "120px")};
  height: ${(props) => (props.$height ? props.$height : "44px")};

  background-color: ${(props) => props.$bgColor};

  color: ${(props) => (props.$color ? props.$color : "#ffffff")};
  border-radius: 30px;

  // margin right 추가
  margin-right: ${(props) => (props.$rmargin ? props.$rmargin : "")};
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : props.theme.fontSize.small};

`;
