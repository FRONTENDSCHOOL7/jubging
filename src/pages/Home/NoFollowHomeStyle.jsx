import styled from "styled-components";

export const NoFollowHomeGroup = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const NoFollowRabbitImg = styled.img`
  width: 98.5px;
  margin: 0 auto;
`;

export const SearchForUser = styled.span`
  color: ${(props) => props.theme.colors.textColor};
  font-size: ${(props) => props.theme.fontSize.medium};
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const SearchUserBtn = styled.button`
  width: 120px;
  height: 44px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.colors.mainColor};
  border-radius: 44px;
  color: #fff;
  font-size: ${(props) => props.theme.fontSize.medium};
`;

const NoFollowHomeStyle = {
  NoFollowHomeGroup,
  NoFollowRabbitImg,
  SearchForUser,
  SearchUserBtn
};

export default NoFollowHomeStyle;