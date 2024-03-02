import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  memo,
} from "react";
import { Container } from "./styles";

interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  error?: string;
}

export const Input = memo(
  ({ label, error, ...props }: InputProps) => {
    return (
      <Container error={error}>
        <label htmlFor="input" id="label">
          {label}
        </label>
        <input
          {...props}
          name="input"
          id={props.type}
        />
        {error && (
          <span id="inputError">* {error}</span>
        )}
      </Container>
    );
  }
);
