import styled from "styled-components";
import kakao from "../../assets/icons/icon-kakao.svg";
import facebook from "../../assets/icons/icon-facebook.svg";
import google from "../../assets/icons/icon-google.svg";

export const LoginBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 22px;
  padding: 0 4.25rem;

  Button {
    flex: 1 0 7.8rem;
  }
`;

export const LoginSection = styled.section`
  text-align: center;
  width: 100%;
  padding: 43px;
  margin-bottom: 40px;
`;

export const SnsLoginText = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;

  margin-bottom: 18px;

  white-space: nowrap;

  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.medium};

  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.textColor};
  }
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.theme.colors.textColor};
  }
`;

export const SnsLogo = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  gap: 17px;

  margin-bottom: 100px;
`;

export const Kakao = styled.button`
  width: 40px;
  height: 40px;
  background-image: url(${kakao});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const Facebook = styled.button`
  width: 40px;
  height: 40px;
  background-image: url(${facebook});
  background-size: contain;
  background-repeat: no-repeat;
`;
export const Google = styled.button`
  width: 40px;
  height: 40px;
  background-image: url(${google});
  background-size: contain;
  background-repeat: no-repeat;
`;
