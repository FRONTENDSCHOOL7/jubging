import HeaderContainer from "./HeaderContainer";
import BackButton from "../Button/BackButton";
import ButtonContainer from "../Button/ButtonContainer";

export default function UploadHeader({ type, bgColor, disabled }) {
  return (
    <HeaderContainer justisfy={"space-between"}>
      <BackButton />
      <ButtonContainer
        type={type}
        width={"90px"}
        height={"32px"}
        rmargin={"12px"}
        bgColor={bgColor}
        disabled={disabled}
        hoverFilter
      >
        저장
      </ButtonContainer>
    </HeaderContainer>
  );
}
