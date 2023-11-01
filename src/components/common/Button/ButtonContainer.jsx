import React from "react";
import { Button } from "./ButtonContainerStyle";

export default function ButtonContainer({
  children,
  type,
  color,
  bgColor,
  width,
  height,
  disabled = false,
  onClick,
  rmargin,
  fontSize,
  border,
  hoverFilter,
}) {
  return (
    <Button
      type={type || "button"}
      onClick={onClick}
      $color={color}
      $bgColor={bgColor}
      $width={width}
      $height={height}
      $disabled={disabled}
      $rmargin={rmargin}
      $fontSize={fontSize}
      $border={border}
      $hoverFilter={hoverFilter}
    >
      {children}
    </Button>
  );
}
