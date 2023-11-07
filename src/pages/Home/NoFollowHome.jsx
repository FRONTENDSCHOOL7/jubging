import { useNavigate } from "react-router-dom";

import noFollowRabbit from "../../assets/images/crying-rabbit.svg";
import ButtonContainer from "../../components/common/Button/ButtonContainer";
import {
  NoFollowHomeGroup,
  NoFollowRabbitImg,
  SearchForUser,
} from "./NoFollowHomeStyle";

function NoFollowHome({ message }) {
  const navigate = useNavigate();

  return (
    <NoFollowHomeGroup>
      <NoFollowRabbitImg src={noFollowRabbit} alt="팔로워가 없어서 우는 토끼" />
      <SearchForUser>{message}</SearchForUser>
      <ButtonContainer onClick={() => navigate("/search")} hoverFilter>
        검색하기
      </ButtonContainer>
    </NoFollowHomeGroup>
  );
}

export default NoFollowHome;
