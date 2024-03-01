import styled from "styled-components";

export const Container = styled.button<{
  loading?: boolean;
}>`
  border: 0;
  padding: 0.25rem;
  border-radius: 4px;
  background: var(--background);
  opacity: ${(props) =>
    props.loading ? 0.7 : 1};
  transition: opacity 0.2s ease;
  font-weight: bold;
  color: var(--white);
  cursor: ${({ loading }) =>
    loading ? "progress" : "pointer"};

  &:hover {
    opacity: 0.7;
  }

  span {
    font-size: 1rem;
  }
`;
