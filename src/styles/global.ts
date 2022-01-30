import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey; 

    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #000; 
        border-radius: 5px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #121212; 
    }



    *{
        margin:0;
        box-sizing: border-box;
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