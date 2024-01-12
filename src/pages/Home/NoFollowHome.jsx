import { useNavigate } from "react-router-dom";

import noFollowRabbit from "../../assets/images/crying-rabbit.webp";
import Button from "../../components/common/Button/Button";
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
      <Button size="lg" variant="primary" onClick={() => navigate("/search")}>
        검색하기
      </Button>
    </NoFollowHomeGroup>
  );
}

export default NoFollowHome;
