'use client'

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1, h2, h3, h4, p, span {
    color: white;
  }

  :root {
    --blue: #5081FF;
    --purple: #758BFD;

    --purple-light: #BDBFFF;
    --purple-dark: #282E54;

    --red: #D72252;
    --green: #16ca48;

    --white: #FFFFFF;
    --black: #000000;
  }

  ::selection {
    background-color: var(--blue);
    color: white;
  }
  
  a {
    text-decoration: none;
    color: var(--white);
  }
`;