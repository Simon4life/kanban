import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Inter, sans-serif;
    background: #030303;
    color: #e5e2e1;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;