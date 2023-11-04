import styled from "styled-components";

export const NoFollowHomeGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -70%);
  margin: 0 auto;
`;

export const NoFollowRabbitImg = styled.img`
  width: 100px;
`;

export const SearchForUser = styled.span`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.medium};
  margin: 20px 0;

  white-space: nowrap;
`;
