import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 360px;
  background-color: #fff9;
  border-radius: 4px;
  padding: 1rem;

  button {
    height: 2.5rem;
    width: 100%;
  }

  span {
    margin-top: 1rem;
    align-self: center;
    font-weight: bold;

    u {
      cursor: pointer;
    }
  }

  strong {
    margin-bottom: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;
