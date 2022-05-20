import { complement, invert, readableColor, shade } from 'polished';
import styled, { css, keyframes } from 'styled-components';

interface IYearsOfExperienceProps{
    color: string;
    years: number;
}

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        width:1%;
        
        
        /* transform: translateX(-50px); */
    }

    to{
        opacity: 1;

        /* transform: translateX(0); */

    }
`;

export const ChildTechs = styled.div`
    
    height:100%;
    width:100%;
    grid-column:1/4;
    margin-bottom:50px;

    display:grid;
    


    >main{
        display:grid;
        grid-template-columns: 200px 1fr;
        background-color:rgba(41, 41, 41, 0.7);
        border-radius: 8px;
        margin-top:15px;
        padding:5px;


        >img{ 
            max-width:20px;
            
        }
    }
`
export const Container = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    max-width:100%;
    width:100%;
    height:auto;
    padding:30px;
    padding-left:20px;
    padding-right:20px;
    margin-bottom:20px;
    border-radius: 8px;
    background-color:rgba(30, 30, 30, 0.7);



    

    @media only screen and (min-width: 768px) {
        grid-template-columns:200px 1fr;
    }

`;

export const YearsOfExperience = styled.div<IYearsOfExperienceProps>`
    display:flex;
    place-items:center;

    
    >div{
        margin-right:10px;
        animation: ${appearFromLeft} 2s;
        height:30px;

        
        

        
        border-radius:8px;
        display:flex;
        align-items:center;
        justify-content:flex-end;
        padding-right:10px;

        ${({color, years}) => css`

            background-color: ${shade(0.2, color)};
            width:${(100*years)/4}%;
            min-width:60px;

            >p{
               
                font-weight:600;
                font-size:14px;
                color: ${readableColor('#000')}
            }
        `}

        @media only screen and (min-width: 768px) {
            ${({color, years}) => css`
                width:${(100*years)/4.5}%;
            `}
        }

        
    }
`;

export const Info = styled.div`
    display:flex;
    place-items:center;
    width:100%;
    padding-left:10px;



    >img{
        width:30px;

    }
    
    >h3{
        font-size:14px;
        margin-left:20px;
    }


    @media only screen and (min-width: 768px) {
        >img{
            width:40px;
        }
        >h3{
            font-size:18px;
            margin-left:20px;
        }
    }
`;
