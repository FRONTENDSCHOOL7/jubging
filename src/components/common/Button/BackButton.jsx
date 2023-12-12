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
    <Button size="sm" onClick={goBack}>
      <BackIcon src={back} />
    </Button>
  );
}

const BackIcon = styled.img`
  width: 24px;
  height: 24px;
`;
