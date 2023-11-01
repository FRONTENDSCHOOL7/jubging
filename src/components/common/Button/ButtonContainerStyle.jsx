import styled from "styled-components";

export const Button = styled.button`
  width: ${(props) => (props.$width ? props.$width : "120px")};
  height: ${(props) => (props.$height ? props.$height : "44px")};
  background-color: ${(props) =>
    props.$bgColor ? props.$bgColor : props.theme.colors.mainColor};
  color: ${(props) => (props.$color ? props.$color : "#ffffff")};
  border-radius: 30px;
  margin-right: ${(props) => (props.$rmargin ? props.$rmargin : "")};
  font-size: ${(props) =>
    props.$fontSize ? props.$fontSize : props.theme.fontSize.small};
  border: ${(props) => (props.$border ? props.$border : null)};

  &:hover {
    filter: ${(props) => (props.$hoverFilter ? "brightness(0.9)" : null)};
    transition: all 0.2s ease-in-out;
  }
`;
