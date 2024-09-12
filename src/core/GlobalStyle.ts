import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
      box-sizing: border-box;
      overflow-y: scroll;
  }

  *, ::after, ::before {
      box-sizing: inherit;
  }

  body {
      font-family: 'Lato', sans-serif;
      word-break: break-word;
}
`;
