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
  loading?: boolean;
}

export const Button = memo(
  ({
    onClick,
    text,
    loading,
    ...props
  }: ButtonProps) => {
    return (
      <Container
        type="button"
        onClick={onClick}
        loading={loading}
        disabled={loading}
        {...props}
      >
        <span>
          {loading ? "Carregando" : text}
        </span>
      </Container>
    );
  }
);
