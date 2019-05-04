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
}

a {
    text-decoration: none;  
  }
ul{
  list-style:none;
}
button{
  outline:none;
  border:none;
  font-family:inherit;

}

`;

export default GlobalStyle;
