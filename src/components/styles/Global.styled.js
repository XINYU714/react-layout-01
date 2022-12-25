import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`
     ${normalize}
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        overflow-x: hidden;
    }
    img{
        max-width: 100%;
        height: auto;
    }


 `;
export default GlobalStyle;
