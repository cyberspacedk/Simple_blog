import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle` 
*{
    box-sizing:border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: 'Space Mono', monospace;
  background-color: #f3f3f3;
}`;

export default GlobalStyle;
