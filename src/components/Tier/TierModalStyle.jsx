import styled from "styled-components";

export const TierModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  position: fixed;

  width: 700px;
  height: 400px;

  background-color: white;
  border-radius: 30px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const TierModalTitle = styled.div`
  margin-top: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.blackColor};
  font-size: ${(props) => props.theme.fontSize.xlarge};
`;

export const TierContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 20px;
`;

export const TierImageBox = styled.div`
  width: 80%;
  overflow: hidden;
  text-align: center;

  img {
    width: 50%;
    aspect-ratio: 1 / 1;
  }
`;

export const TierTitle = styled.p`
  color: ${(props) => props.theme.colors.blackColor};
  font-size: ${(props) => props.theme.fontSize.medium};

  margin-top: 10px;
`;

export const TierDistanse = styled.p`
  color: ${(props) => props.theme.colors.blackColor};
  font-size: ${(props) => props.theme.fontSize.small};

  margin-top: 5px;
`;
