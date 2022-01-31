import { lighten, shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #000;
    display:grid;
    grid-template-rows: 120px 40px 1fr;
    grid-gap:0;
`;

export const NavBar = styled.nav`
    /* width: 100%; */
    height:120px;
    background-color: #5C325D;
    border:none;
    text-align:center;
    color: #fff;
    display:grid;
    padding-top: 20px;
    grid-gap:0;
    grid-template-rows: 1fr 1fr;
`;


export const Body = styled.body`
    height:100%;
    display:grid;
    grid-gap:20px;
    padding-top:30px;
    overflow:auto;
    align-items:flex-start;
    justify-content:center;
    background:#fff;

    >span{
        color:#121212;
    }
`;

export const List = styled.div`
    padding:10px;
    background:#E7E0E7;
    height:350px;
    width:320px;
    border-radius: 10px;
    color:#121212;
    display:grid;
    grid-template-rows: 40px 1fr 40px;
    box-shadow: 2px 2px 5px rgba(0,0,0,0.4);
    border:solid 1px #5C325D;

    >div{
        display:flex;
        justify-content:stretch;
        height:40px;
        border-radius:8px;
        box-shadow: 1px 1px 1px ${shade(0.8,'#8D708E')};
        
        >input{
            width:100%;
            
            border:none;
            border-radius:8px 0px 0px 8px;
            padding: 10px;

        }

        >button{
            border-radius:0px 8px 8px 0px;
            border:none;
            width:50px;
            background: #8D708E;
            color:#fff;
            font-weight:400;
            font-size:28px;
            display:flex;
            justify-content: center;
            align-items: center;

            &:hover{
                background-color:#5C325D;
            }
        }
    }

    >h3{
        text-align:center;
    }

    >ul{
        overflow:auto;
        width:100%;
        padding:10px 0px 10px 0px;
        list-style-type: none;

        >li{
            box-shadow: 1px 1px 2px ${shade(0.2,'#8D708E')};
            display:flex;
            justify-content:flex-start;
            align-items:center;
            padding-left:10px;
            background:#fff;
            height:40px;
            border-radius:10px;
            border:1px solid #8D708E;

            >input[type="checkbox"]{
                margin-right:10px;
                display: grid;
                place-content: center;
                border: 1.5px solid #8D708E;
            }

            input[type="checkbox"]:checked::before{
                background-color:#8D708E;
            }
            
            >input[type="text"]{
                border-radius:0px 8px 8px 0px;
                border:none;
                color:#000;
                width:100%;
                height:100%;
                padding: 10px;
            }

            &+li{
                margin-top:10px;
            }
        }
    }
`;

export const Actions = styled.div`
    height:40px;
    display:flex;
    background: #8D708E;
    place-items:center;

    >button{
        background-color: ${lighten(0.2, '#5C325D')};
        color: #fff;
        padding: 10px;
        border:none;

        &:hover{
            background-color: ${shade(0.1, '#5C325D')}
        }
    }

`;