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

const appearFromTop = keyframes`
    from{
        >svg{
            transform: rotate(90deg);
        }
        opacity: 0;
        transform: translateY(-50px);
    }

    to{
        opacity: 1;
        transform: translateY(0);
    }
`;


export const Container = styled.main`
    position: absolute;
    padding:20px;
    display:grid;
    grid-gap:10px;
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 0.6fr 0.2fr 0.8fr;
    place-items: flex-start;

    @media only screen and (max-width: 768px) {
        grid-gap: 50px;
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
    grid-gap:30px;
    height:200px;

    >h2 {
        display:flex;
        align-items: top;
        >svg{
            margin-right:10px;
            /* background:red; */
            font-size:24px;
        }
    }
`;

export const Insert = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    text-align: center;

    #timestamps-form{
        display:grid;
        grid-template-columns:1fr .1fr;
        align-items:center;
        justify-content:center;
        grid-gap:1px;
        width:auto;
        grid-template-rows:1fr;

        >button{
            align-self:flex-end;
        }

        >div{
            min-width:200px;
            display:flex;
            justify-content: center;
            align-items:center;

            >div>input{
                height:40px;
                background:#121212;
                color:#fff;
            }
        }

        
    }

    #date-form{
        display:grid;
        grid-template-rows: 1fr;
        grid-template-areas: 
            "year mon day hour min sec button";
        grid-gap:5px;
        place-items:center;
        

        >button{
            align-self:flex-end;
        }

        @media only screen and (max-width: 668px) {
            grid-template-rows: 1fr 0.5fr;
            grid-template-areas: 
                "year mon day hour min sec";

            >button{
                align-items:flex-start;
                margin:0;
                grid-column: 6/7;
                grid-row: 2;
            }
            
        }

        div>div{
            
            display:flex;
            justify-content: center;
            align-items:center;
            
            >input{
                text-align:center;
                width:50px;
                height:40px;
                background:#121212;
            }
        }

        div:first-child{
            
            width:80px;

            div>input{
                width:70px;
            }

        }
    }
`;



export const ConvertButton = styled.button`
    width:50px;
    height:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff9000;
    border-radius: 10px;
    border: 0;
    padding:5px;
    color: #333333;
    transition: background-color 0.2s;
    font-size:32px;
    color:#fff;
    margin-left:10px;

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
    width:auto;

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

        >input{
            color:#fff;
            font-size:16px;
            width:300px;
            height:25px;
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
    margin-top: 10px;

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
    padding:20px;
    height:auto;
    width:auto;

    flex:1;
    display:flex;
    max-width:100vw;
    grid-gap:2px;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
        place-items: flex-start;
        height:auto;
        padding:2px;
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
    width:100%;
    height:2px;
    margin: 30px 0px;
    background:#ff9000;
    border-radius: 5px;
    opacity: 0.3;
`;

