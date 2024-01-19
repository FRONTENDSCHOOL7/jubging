import styled from "styled-components";

import Button from "./Button";
import more from "../../../assets/icons/icon-more-vertical.svg";

export default function MoreButton({ onClick }) {
  return (
    <Button size="sm" onClick={onClick}>
      <MoreIcon src={more} alt="더보기 버튼" />
    </Button>
  );
}

const MoreIcon = styled.img`
  width: 24px;
  height: 24px;
`;
