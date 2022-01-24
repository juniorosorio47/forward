import styled from 'styled-components';
import { shade } from 'polished';



export const Container = styled.main`
  padding:24px;
  /* border: 2px solid red; */

  >div{
      display:grid;
      grid-gap:20px;
      margin-top: 60px;
  }

`;

export const Section = styled.div`
    /* background-color:red; */
    >h2 {
        display:flex;
        align-items: center;
        >svg{
            margin-right:10px;
        }

    }
`;

export const Insert = styled.div`
    /* border: 2px solid blue; */
    
    display:flex;
    justify-content:flex-start;
    align-items:center;
    text-align: center;
    /* max-width:850px; */


    #timestamps-form{
        display:grid;
        grid-template-columns:1fr .1fr;
        align-items:center;
        justify-content:center;
        grid-gap:1px;
        width:auto;
        grid-template-rows:1fr;

        >div{
            min-width:250px;
            display:flex;
            justify-content: center;
            align-items:center;
            


            >div>input{
                height:30px;
            }
        }

    }

    #date-form{
        display:grid;
        grid-template-columns:1.2fr .7fr .7fr .7fr .7fr .7fr .5fr;
        grid-gap:8px;
        justify-content: flex-start;
        align-items:center;
        max-width:800px;

        div>div{
            display:flex;
            justify-content: center;
            align-items:center;
            
            >input{
                text-align:center;
                width:40px;
                height:30px;
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
    align-self:flex-end;
    width:35px;
    height:35px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff9000;
    border-radius: 10px;
    border: 0;
    padding:5px;
    color: #333333;
    transition: background-color 0.2s;

    >svg{
        width:100px;
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
    width:50px;

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
            font-size:16px;
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
    /* border: 2px solid green; */
    flex:4;
    background:#333333;
    padding:10px;
    border-radius:8px;
    min-width:580px;
    max-width:600px;

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
    /* border: 2px solid gray; */
    display:flex;
    max-width:100vw;
    
    grid-gap:1px;
    justify-content: flex-start;
    align-items: center;

    >svg{
        font-size:60px;
        align-self:top;
        margin-left: 30px;
        margin-top: 12px;
        margin-right: 20px;
    }

`;

export const Divider = styled.div`
    width:1200px;
    height:2px;
    background:white;
    border-radius: 5px;
    opacity: 0.3;
`;

