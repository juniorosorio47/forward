import { readableColor, shade } from 'polished';
import styled, { css } from 'styled-components';

interface IBackgroundProps{
    backgroundColor: string;
    textColor?: string;
}


export const Container = styled.div<IBackgroundProps>`
    position: absolute;
    top:20px;
    left:5px;
    z-index:1000;
   
    width:200px;
    height:60px;
    font-size:14px;
    display:flex;
    place-items: center;
    text-shadow: 1px 1px 2px #d4d4d4;
${props=>css`
    >span{
        color: ${props.textColor};
    }
    >a{
        margin-left:10px;
        color:#fff;
        width:40px;
        height:40px;    
        display:grid;
        place-items: center;
        border-radius:8px;
        border:none;
        font-weight:700;
        transition: background 0.3s ease-in-out;
        
    
        
        background-color: ${shade( 0.1 ,props.backgroundColor)};

        &:hover{
            transition: background 0.3s ease-in-out;
            background-color: ${shade( 0.3 ,props.backgroundColor)};
        }
    }
`}
    >span{
        display:none;
    }

    @media only screen and (min-width: 768px) {
        >span{
            display:flex;
        }
        top:auto;
        left:auto;
        bottom:50px;
        right:10px;


        
    }
  
`;
