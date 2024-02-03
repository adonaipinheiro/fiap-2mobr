import { memo } from "react";
import type {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
} from "react";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button = memo(
  ({ onClick }: ButtonProps) => {
    return (
      <button type="button" onClick={onClick}>
        Press me
      </button>
    );
  }
);
