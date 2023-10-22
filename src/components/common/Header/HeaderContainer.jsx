import React from "react";
import { Container } from "./HeaderContainerStyle";

export default function HeaderContainer({ children, justisfy }) {
  return <Container justisfy={justisfy}>{children}</Container>;
}
