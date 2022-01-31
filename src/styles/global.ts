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
        outline: none;
        font-family:'Spartan', sans-serif;
        font-size:16px;
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight:500;
    }

    button {
        cursor:pointer;
    }

    input[type="checkbox"] {
        appearance: none;
        background-color: #fff;
        margin: 0;
        font: inherit;
        color: currentColor;
        width: 1.15em;
        height: 1.15em;
        border: 0.15em solid currentColor;
        border-radius: 0.15em;
        transform: translateY(-0.075em);
        display: grid;
        place-content: center;
    }

    input[type="checkbox"]::before {
        content: "";
        width: 0.5em;
        height: 0.5em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    }

    input[type="checkbox"]:checked::before {
        transform: scale(1);
        background-color: CanvasText;
    }

`;