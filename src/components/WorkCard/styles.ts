import { readableColor, shade } from 'polished';
import styled from 'styled-components';

export const BackgroundGlass = styled.div`
    /* background properties */
    position:absolute;
    background-color:#666;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index:-10;
    /* width:660px;
    height:450px; */
    /* display properties */
    filter: blur(5px);
    border:solid 5px #121212;
    opacity:0.7;
    border-radius: 10px;
`;

export const WorkCardContainer = styled.div`
    padding:25px;
    width:100%;
    height:100%;
    text-align:center;
    font-weight:500;
    border-radius: 10px;
    display:grid;
    grid-template-rows: 60px 30px 30px 120px auto 60px;
    grid-gap:20px;
    align-items:center;
    font-size:14px;

    background-color:#1E1E1E;
    color: ${readableColor('#666')};
    box-shadow: 2px 2px 10px #000;

    >h2{
        /* color:red; */
        font-size:24px;
    }

    >a{
        align-self:flex-end;
        width:160px;

    }

    >h3{
        font-size:18px;
        font-weight:200;
    }

    >span{
        font-size:14px;
    }

    >p{ 
        font-weight:200;
        align-self:start;
        font-size:16px;
    }

    >ul{ 
        list-style:none;
        display:grid;
        grid-template-columns:1fr 1fr;
        grid-template-rows:40px 40px 40px 40px 40px;
        border-radius:8px;
        grid-gap:5px;
        padding:0;

        >li{
            display:flex;
            background-color:rgba(18,18,18,1);
            border-radius:8px;
            place-items:center;
            font-size:16px;
            line-height:25px;
            padding:10px;
            
        }
    }
   
`;
