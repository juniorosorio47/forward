import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    *{
        margin:0
    }
    
    body {
        background:#000000;
        color:#fff;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family:'Spartan', sans-serif;
        font-size:16px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight:500;
    }

    button {
        cursor:pointer;
    }

`;