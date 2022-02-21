import { shade } from 'polished';
import styled, { css, keyframes } from 'styled-components';

interface IYearsOfExperienceProps{
    color: string;
    years: number;
    percentage?:number;
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

export const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content:stretch;
    width:80vw;
    height:80px;
    padding-left:10px;
    padding-right:10px;
    padding-top:20px;
`;

export const YearsOfExperience = styled.div<IYearsOfExperienceProps>`
    display:grid;
    align-items:center;
    max-width:80vw;
    
    >div{
        animation: ${appearFromLeft} 2s;
        height:25px;
        width:100%;
        border-radius:8px;
        display:flex;
        align-items:center;
        justify-content:flex-end;
        padding-right:10px;

        ${({color, years, percentage}) => css`

            background-color: ${shade(0.1, color)};
            width:${(1000*years)/4}%;

            >p{
                text-shadow: 1px 1px 3px ${shade(0.8, color)};
            }

        `}
       
    }
`;

export const Info = styled.div`
    display:flex;
    place-items:center;
    width:250px;

    >img{
        width:40px;
    }
    >h3{
        margin-left:20px;
    }
`;
