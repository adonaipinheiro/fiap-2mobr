import styled, { css } from "styled-components";

export const Container = styled.div<{
  error?: string;
}>`
  &,
  input {
    width: 100%;
  }

  margin-bottom: 1rem;

  #label {
    font-size: 0.75rem;
    margin-bottom: 2.5px;
    font-weight: 600;
    color: var(--black);
  }

  input {
    border: 1px;
    border-color: #eaeaea;
    border-radius: 4px;
    padding: 0 10px;
    height: 2.5rem;

    &:focus-visible {
      outline: none;
    }

    ${({ error }) =>
      error &&
      css`
        border: 2px solid red;
      `}
  }

  #inputError {
    font-size: 10px;
    color: red;
    font-style: italic;
    margin-left: 0.25rem;
  }
`;
