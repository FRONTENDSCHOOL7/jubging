import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import HeaderContainer from "./HeaderContainer";
import BackButton from "../Button/BackButton";
import ButtonContainer from "../Button/ButtonContainer";

export default function UploadHeader({ type, image, content }) {
  const { pathname } = useLocation();
  const [isFormComplete, setIsFormComplete] = useState(false);

  useEffect(() => {
    if (pathname === "/post/upload" && (image || content)) {
      setIsFormComplete(true);
    } else {
      setIsFormComplete(false);
    }
  }, [pathname, image, content]);

  return (
    <HeaderContainer justisfy={"space-between"}>
      <BackButton />
      <ButtonContainer
        type={type}
        width={"90px"}
        height={"32px"}
        rmargin={"12px"}
        bgColor={isFormComplete ? "#40A6DE" : "#94CEF8"}
        hoverFilter
      >
        저장
      </ButtonContainer>
    </HeaderContainer>
  );
}
