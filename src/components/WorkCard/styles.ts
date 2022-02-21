import { shade } from 'polished';
import styled from 'styled-components';

export const BackgroundGlass = styled.div`
    /* background properties */
    position:absolute;
    background-color:#121212;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index:-10;
    width:400px;
    height:550px;
    /* display properties */
    filter: blur(5px);
    border:solid 5px #121212;
    opacity:0.7;
    border-radius: 10px;
`;

export const WorkCardContainer = styled.div`
    padding:25px;
    width:400px;
    height:550px;
    border-radius: 10px;
    display:grid;
    line-height:20px;

    >a:hover {
        color:${shade(0.1, '#fff')}
    }

    >ul{ 
        padding:15px;
        list-style:none;
    }
   
`;
