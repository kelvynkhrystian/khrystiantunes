import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  /* reset-css */

  * {
    box-sizing: border-box;
    font-family: -apple-system, monospace, 'Open Sans', sans-serif;
    padding: 0;
    margin: 0;
    text-decoration: none;
  }

  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    width: 100%;
  }

`;
