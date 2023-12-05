import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "./Button";
import back from "../../../assets/icons/icon-arrow-left.svg";

export default function BackButton() {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <Button size="md" onClick={goBack}>
      <BackIcon src={back} />
    </Button>
  );
}

const BackIcon = styled.img`
  width: 22px;
  height: 22px;
`;
