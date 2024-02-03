import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 480px;
  height: 95vh;
  margin: 10px auto;
  gap: 10px;
`;

export const SearchArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff9;
  padding: 1rem;
  border-radius: 4px;
  width: 100%;
  max-height: 250px;

  input {
    border: 0;
    margin: 1rem;
    padding: 0.5rem;
    width: 100%;
    border-radius: 4px;
  }

  button {
    width: 100%;
    background-color: var(--background);
    color: var(--white);
    font-weight: bold;
    height: 40px;
  }
`;

export const ResultArea = styled.div`
  background-color: var(--white);
  width: 100%;
  padding: 1rem;
`;
