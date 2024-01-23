import styled from "styled-components";

import Button from "./Button";
import more from "../../../assets/icons/icon-more-vertical.svg";
import A11yHidden from "../A11yHidden/A11yHidden";

export default function MoreButton({ onClick }) {
  return (
    <Button size="sm" onClick={onClick}>
      <A11yHidden>더보기</A11yHidden>
      <MoreIcon src={more} alt="더보기 버튼" />
    </Button>
  );
}

const MoreIcon = styled.img`
  width: 24px;
  height: 24px;
`;
