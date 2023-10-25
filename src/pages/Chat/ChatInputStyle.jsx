import styled from 'styled-components';

export const ChatBar = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 390px;
  height: 60px;
  border-top: 1px solid #dfdfdf;
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
`;

export const Button = styled.button`
  background-color: transparent;
  border:none; 
  margin: 0 16px;
  color:${(props) => props.$active ? props.theme.colors.mainColor : props.theme.colors.placeHolderColor};
  font-size: ${(props) => props.theme.fontSize.medium};
`;