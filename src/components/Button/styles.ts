import styled from "styled-components";

export const Container = styled.button`
  border: 0;
  padding: 5px;
  border-radius: 4px;
  background: var(--white);
  opacity: ${(props) =>
    props.disabled ? 0.7 : 1};

  span {
    font-size: 1rem;
  }
`;
