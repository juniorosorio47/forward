import { readableColor } from 'polished';
import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        
        
        transform: translateX(-100px);
    }

    to{
        opacity: 1;
        transform: translateX(0);

    }
`;

export const ProjectContainer = styled.div`
    background-color:rgba(102, 102, 102,0.3);
    color: ${readableColor('#666')};

    animation: ${appearFromLeft} 1s;

    display:grid;
    grid-template-rows: 180px 1fr;
    border-radius:15px;

    >iframe{
        border-radius:15px;
        height:180px;
        width:100%;
    }

    >main{
        width:100%;
        height:auto;
        display:grid;
        place-items:center;
        grid-template-rows: 70px 160px 120px 60px;
        grid-template-columns: 1fr;
        padding:15px;


        >div{
            width:100%;
            display:flex;
            place-items:center;
        }

        >p{
            line-height:24px;
            font-weight: 400;
            font-size:16px;

            max-width:100%;
        }

        >h2{
            margin-top:15px;
        }
    }

    @media only screen and (min-width: 768px) {
        grid-template-rows: 300px 1fr;

        >iframe{
            height:100%;
            width:100%;
        }

        >main{
            width:100%;
            height:100%;
            grid-template-rows: 80px 150px 80px 100px;
            max-width:500px;
            max-height:740px;
        }
    }

    
`;
