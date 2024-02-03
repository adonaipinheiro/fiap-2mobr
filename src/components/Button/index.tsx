import { memo } from "react";
import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";
import { Container } from "./styles";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  text: string;
}

export const Button = memo(
  ({ onClick, text, ...props }: ButtonProps) => {
    return (
      <Container
        type="button"
        onClick={onClick}
        {...props}
      >
        <span>{text}</span>
      </Container>
    );
  }
);
