import { PropsWithChildren, memo } from "react";
import { Container } from "./styles";

interface DefaultContainerProps
  extends PropsWithChildren {}

export const DefaultContainer = memo(
  ({ children }: DefaultContainerProps) => {
    return <Container>{children}</Container>;
  }
);
