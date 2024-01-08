import styled from "styled-components";
import { colors } from "./../../../styles/Theme";

export const AlertContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const AlertBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 252px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.15);

  z-index: 9999;
`;

export const Message = styled.p`
  padding-top: 36px;
  text-align: center;
`;

export const ButtonWrraper = styled.div`
  width: 100%;
  border-top: 0.5px solid #dbdbdb;

  button {
    width: 50%;
  }

  button:first-child {
    border-right: 0.5px solid #dbdbdb;
    border-radius: 0 0 0 10px;
  }

  button:last-child {
    color: ${(props) => props.theme.colors.mainColor};
    border-radius: 0 0 10px 0;
  }
`;
