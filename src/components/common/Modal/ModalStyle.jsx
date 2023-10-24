import styled from "styled-components";

export const ModalBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 390px;
  /* 높이는 추후에 삭제 컨텐츠 갯수에 따라 변동 */
  height: 200px;

  position: fixed;
  z-index: 1000;
  bottom: 0;

  padding-top: 16px;

  background-color: royalblue;
  border-radius: 10px 10px 0 0;
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.15);
`;

export const ModalBar = styled.div`
  width: 50px;
  height: 4px;

  margin-bottom: 16px;
  background-color: #dbdbdb;
  border-radius: 5px;
`;
