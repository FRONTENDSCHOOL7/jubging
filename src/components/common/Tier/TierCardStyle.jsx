import styled from "styled-components";

export const TierCardContainer = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;

  margin-top: 1.625rem;
  padding: 1cap;

  width: 90%;

  border-radius: 10px;
  background: #fffdfd;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  left: 50%;
  transform: translate(-50%, 0);
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  border: 1px solid #dbdbdb;
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

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.625rem;
  height: 100%;

  button {
    vertical-align: top;
  }
`;

export const TierName = styled.p`
  font-size: ${(props) => props.theme.fontSize.large};
`;

export const DistanseInfo = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.textColor};
`;

export const AccDistanse = styled.p`
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.colors.blackColor};
`;
