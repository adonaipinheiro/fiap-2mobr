import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  flex-direction: column;
  background-color: var(--white);
  margin: 2rem;
  padding: 1rem;
  border-radius: 1rem;
  max-width: 480px;
  width: 90%;
`;

export const UserInfoArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
    width: 150px;
    border-radius: 0.5rem;
    margin-right: 0.5rem;
  }
`;

export const UserInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--black);
`;
