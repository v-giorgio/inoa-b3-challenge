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

/* SCROLLBAR */
::-webkit-scrollbar {
  background-color: rgba(61, 113, 215, 0.97);
  width: 10px;
}

::-webkit-scrollbar-thumb {
    width: 10px;
    background-color: rgba(244, 244, 244, 1);
    border-radius: 10px;
}

`;
