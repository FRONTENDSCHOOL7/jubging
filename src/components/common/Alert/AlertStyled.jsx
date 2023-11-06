import styled from "styled-components";

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
  border-top: 0.5px solid #dbdbdb;

  button {
    border-bottom-right-radius: 10px;
    border-top-right-radius: 0px;
    background-color: #ffffff;
  }

  button:first-child {
    border-right: 0.5px solid #dbdbdb;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 10px;
  }

  button:last-child {
    border-bottom-right-radius: 10px;
  }
`;
