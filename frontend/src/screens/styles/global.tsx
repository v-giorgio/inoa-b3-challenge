import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    
}

#root{
    margin:0 auto;
}

body{
    max-width: 100vw;
    font-family: 'Montserrat', sans-serif;
}

`;
