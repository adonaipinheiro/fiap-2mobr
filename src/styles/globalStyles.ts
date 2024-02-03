import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;
  }

  h1 {
    font-size: 1.6rem;
  }

  body {
    background: var(--background);
  }

  button {
    cursor: pointer;
  }

  :root {
    --white: #FFFFFF;
    --black: #000000;
    --background: #e91c5d;
  }
`;

export { GlobalStyles };
