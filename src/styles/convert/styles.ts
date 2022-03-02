import styled, { keyframes } from 'styled-components';
import { shade, lighten } from 'polished';


const appearFromLeft = keyframes`
    from{
        opacity: 0;
        
        
        transform: translateX(-50px);
    }

    to{
        opacity: 1;
        transform: translateX(0);
    }
`;



export const Container = styled.main`
    width:100%;
    height:100%;
    position: absolute;
    padding:20px;
    display:grid;
    /* grid-gap:10px; */
    grid-template-columns: 1fr;
    grid-template-rows: 80px 200px 20px 2fr;
    place-items: flex-start;
    grid-gap: 50px;
    
    >h1{
        text-align: center;
        padding-top:15px;
    }

    @media only screen and (max-width: 768px) {
        
        grid-template-rows: 0.2fr 1.2fr 0.2fr 0.8fr;

        h1{
            font-size:24px;
            width:100%;
        }

        h2{
            font-size:18px;
            width:100%;
        }
    }


    >h1 {
        color:${lighten(0.1,"#ff9000")};
        margin-bottom:20px;
    }
`;

export const Section = styled.div`
    display:grid;
    grid-template-rows:40px 250px;
    grid-gap:30px;
    width:100%;
    height:100%;
    


    >h2 {
        display:flex;
        place-items:center;
        >svg{
            margin-right:10px;
            /* background:red; */
            font-size:24px;
        }
    }
`;

export const Insert = styled.div`
    display:flex;
    width:100%;
    max-height:100%;
    align-items: center;
    padding:10px;
    border-radius:10px;
    /* height:80px; */

    >form{
        display:grid;
        grid-template-columns:1fr 120px;
        grid-gap:10px;
        align-items: flex-end;
        width:100%;
        justify-content: center;


    }


    #date-form{

        >main{
            display:grid;
            grid-template-columns:1fr 1fr 1fr;
            grid-gap:10px;

            >div{
                margin-right:10px;
            }
        }
        
    }

    
`;



export const ConvertButton = styled.button`
    height:40px;
    width:120px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff9000;
    border-radius: 10px;
    border: none;
    transition: background-color 0.2s;
    font-size:16px;
    color:#fff;
    padding:5px;

    >svg{
        margin-right:8px;
    }

    &:hover {
        background: ${shade(0.2, '#ff9000')};
    }
`

export const Field = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    width:100%;

    >p{
        font-size:12px;
        margin-bottom:5px;
    }

    >div{
        display:flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color:transparent;
        border:none;
        color:white;
        padding:0;
        width:100%;
        height:40px;

        >input{
            color:#fff;
            font-size:16px;
            /* width:300px; */
            height:40px;
            
            border: 1px solid #fff;
            border-radius: 5px;
            text-align: center;
        }
    }

    >div>select{
        margin-left:15px;
        font-size:16px;
        margin-top:20px;
        height:35px;
        border: 1px solid #fff;
        border-radius: 5px;
        text-align: center;
    }

`;

export const Result = styled.div`

    animation: ${appearFromLeft} 1s;
    background:#333333;
    padding:10px;
    border-radius:8px;
    height:150px;
    display:flex;
    flex-direction: column;
    justify-content: center;

    >p{
        font-weight:300;
        font-size:14px;
        &+p{
            margin-top:8px;
        }

        >span{
            font-weight:600;
            margin-right:8px;
        }
    }

`;

export const Content = styled.div`
    height:180px;
    width:100%;
    justify-content: center;

    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:auto 180px;
    grid-gap:20px;


    @media only screen and (min-width: 768px) {
        grid-template-columns:1fr 2fr;
        grid-template-rows:auto;
        flex-direction: column;
        place-items: flex-start;
        height:auto;
    }

    >svg{
        font-size:60px;
        align-self:top;
        margin-left: 30px;
        margin-top: 12px;
        margin-right: 20px;
        
        
        @media only screen and (max-width: 768px) {
            display:none;
            
        }

        animation: ${appearFromLeft} 1s;
    }

`;

export const Divider = styled.div`
    width:80vw;
    height:3px;
    background:#ff9000;
    border-radius: 5px;
    opacity: 0.3;
    display:flex;
    place-items: center;


    @media only screen and (max-width: 768px) {
        
    }
`;

