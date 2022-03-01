import { readableColor } from 'polished';
import styled from 'styled-components';

export const BackgroundGlass = styled.div`
    /* background properties */
    position:absolute;
    background-color:rgba(102, 102, 102,0.3);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index:-10;
    width:100%;
    padding:0;
    height:580px;
    /* display properties */
    filter: blur(3px);
    border-radius: 10px;

    @media only screen and (min-width: 768px) {
        width:100%;
    }
`;

export const ProjectContainer = styled.div`
    background-color:rgba(102, 102, 102,0.3);
    color: ${readableColor('#666')};

    display:grid;
    grid-template-rows: .8fr 1fr;
    border-radius: 10px;

    @media only screen and (min-width: 768px) {
        grid-template-rows: .9fr 1fr;
    }

    >iframe{
        border-radius: 10px;
        height:100%;
        width:100%;
    }

   
    >main{
        width:100%;
        height:auto;
        display:grid;
        place-items:center;
        grid-template-rows: 80px 150px 120px 60px;
        grid-template-columns: 1fr;
        padding:15px;
        

        >div{
            display:flex;
            place-items:center;
            background-color:red;
        }

        >p{
            line-height:28px;
            font-weight: 400;
            font-size:18px;

            max-width:100%;
        }

        >h2{
            margin-top:15px;
        }

        

       


        
        @media only screen and (min-width: 768px) {
            width:100%;
            grid-template-rows: 80px 150px auto 100px;


            >iframe{
                border-radius: 10px;
                height:100%;
                width:100%;
            }
        }
    }

    
`;
