import styled from "styled-components";
import info from "../../assets/icons/icon-info.svg";

export const CardContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 2.2rem 1.45rem;
`;

export const ImageContainer = styled.article`
  position: relative;
  min-width: 110px;
  height: 110px;
  border-radius: 50%;
  overflow: hidden;
`;

export const TierCardImage = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 21px;
  height: 100%;
  flex: 2 0 0;
`;

export const ContentTitle = styled.h3`
  margin-bottom: 8px;
  font-size: ${(props) => props.theme.fontSize.large};
`;

export const ContentDetail = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.textColor};

  img {
    width: 25px;
    margin-right: 5px;
  }
`;

export const TierContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const TierInfoBtn = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  margin-bottom: 11px;
  transition: 0.3s;
  background: url(${info}) no-repeat center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;
