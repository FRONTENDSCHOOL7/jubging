import styled, { css } from "styled-components";

function Button({ disabled, size, variant, children, ...props }) {
  return (
    <StyledButton disabled={disabled} size={size} variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}

const SIZES = {
  sm: css`
    --button-font-size: ${(props) => props.theme.fontSize.xsmall};
    --button-padding: 0 0.85rem;
    --button-height: 1.75rem;
  `,
  md: css`
    --button-font-size: ${(props) => props.theme.fontSize.small};
    --button-padding: 0.5rem;
    --button-height: 2.15rem;
  `,
  lg: css`
    --button-font-size: ${(props) => props.theme.fontSize.medium};
    --button-padding: 0 1.15rem;
    --button-height: 2.75rem;
  `,
};

const VARIANTS = {
  primary: css`
    --button-color: ${(props) => props.theme.colors.whiteColor};
    --button-background: ${(props) => props.theme.colors.mainColor};
    --button-border: 1px solid ${(props) => props.theme.colors.mainColor};
  `,
  white: css`
    --button-color: ${(props) => props.theme.colors.blackColor};
    --button-background: ${(props) => props.theme.colors.whiteColor};
    --button-border: 1px solid ${(props) => props.theme.colors.placeHolderColor};
  `,
  disabled: css`
    --button-color: ${(props) => props.theme.colors.whiteColor};
    --button-background: ${(props) => props.theme.colors.disabledColor};
    --button-border: 1px solid ${(props) => props.theme.colors.disabledColor};
  `,
};

const StyledButton = styled.button`
  ${({ size }) => SIZES[size]}
  ${({ variant }) => VARIANTS[variant]}

  margin: 0;
  font: inherit;
  cursor: pointer;
  background: var(--button-background);
  border: var(--button-border);
  color: var(--button-color);
  padding: var(--button-padding);
  height: var(--button-height);
  line-height: var(--button-height);
  font-size: var(--button-font-size);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 2.75rem;
  transition: all 0.3s ease-out;

  &:disabled {
    --button-background: ${(props) => props.theme.colors.disabledColor};
    --button-color: ${(props) => props.theme.colors.whiteColor};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    filter: brightness(0.9);
  }
`;

export default Button;
