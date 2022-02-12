import { Form } from '@unform/web';
import { lighten, shade } from 'polished';
import styled, { css, keyframes } from 'styled-components';
import { animated } from 'react-spring';

interface ToDoProps{
    checked?: true | false,
}

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

const appearFromBottom = keyframes`
    from{
        opacity: 0;
        
        
        transform: translateY(20px);
    }

    to{
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    color: #000;
    display:grid;
    grid-template-rows: 120px 40px 1fr;
    grid-gap:0;
`;

export const NavBar = styled.nav`

    width: 100%;
    height:120px;
    background-color: #5C325D;
    border:none;
    text-align:center;
    color: #fff;
    display:grid;
    padding-top: 20px;
    grid-gap:5px;
    justify-content: center;
    align-items: center;

    >svg{
        position:absolute;
        width:130px;
        margin-left:20px;
        padding:0;
    }

    @media only screen and (max-width: 668px) {
        grid-template-rows: 50px 50px;
    
        >svg{
            position:relative;
            grid-row:1;
            flex:1;
            height:70px;
            width:100%;
        }

        >span{
            grid-row:2;
            font-size:14px;
        }

    }

    
`;


export const Body = styled.div`
    height:100%;
    width:100%;
    display:grid;
    grid-gap:10px;
    padding-top:30px;
    overflow:auto;
    align-items:flex-start;
    justify-content:center;
    background:#fff;

    @media ( min-width: 900px ) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        padding-top:0px;
        padding:30px;
    }

    >span{
        color:#121212;
    }
`;

export const ListHeader = styled.div`
    display:grid;
    justify-content:space-evenly;
    grid-template-columns: 1fr 60px auto;
    align-items:center;
    padding-right:10px;
    background:#5C325D;

    height:60px;

    color:#fff;

    >span{
        font-size:12px;
    }

    

`;

export const ListTitleForm = styled(Form)`
    height:100%;
    margin:0;
    padding:0;

    display:grid;
    grid-template-columns: 1fr 50px;
    grid-gap:5px;
    align-items:center;
    justify-content: center;
    height:100%;

    >button {
        border:none;
        background-image:none;
        background-color:transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;


        height:100%;
        width:40px;
        font-size:24px;
        display:flex;
        place-items:center;

        
        
        
        color:#01C851;

        &:hover{
            color:#198754;
        }
    }


    input[type="text"]{
        border:none;
        background-image:none;
        background-color:transparent;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;


        padding-left:10px;
        color:white;
        font-size:20px;
        width:100%;
        height:100%;
    }
`;

export const EmptyLists = styled.div`
    display:flex;
    width:350px;
    place-items:baseline;
    text-align:center;
    
    color:#5C325D;
    animation: ${appearFromLeft} .5s;

    >p{
        font-weight:500;
    }
    >svg{
        animation: ${appearFromBottom} 1.5s;
        font-size:24px;
        margin-right:10px;
    }
`;


export const List = styled(animated.div)`
    animation: ${appearFromLeft} 1s;
    padding:0px;
    background:#E7E0E7;
    height:350px;
    width:360px;
    /* border-radius: 10px; */
    color:#121212;
    display:grid;
    grid-template-rows: 60px 1fr 40px;
    box-shadow: 2px 5px 5px rgba(0,0,0,0.3);
    border:solid 1px rgba(0,0,0,0.1);

    #button-full-body{
        display:flex;
        align-items: center;
        justify-content: center;
        font-size:64px;
        /* border-radius:15px; */
        
        background-color: ${lighten(0.2, '#5C325D')};
        padding: 10px;
        color: #fff;
        border:none;
        transition: all 0.2s ease;

        &:hover{
            transition: all 0.2s ease;
            background-color: ${shade(0.1, '#5C325D')}
            
        }



    }

    >h3{
        text-align:center;
    }

    >ul{
        overflow:auto;
        width:100%;
        padding:0px 0px 10px 0px;
        list-style-type: none;

        display:flex;
        flex-direction:column;
        align-items: center;

        >li{
            width:100%;
        }

        >p{
            margin-top:10px;

        }

    }
`;

export const Actions = styled.div`
    height:40px;
    display:flex;
    background: #8D708E;
    place-items:center;

    color: #fff;

    >span{
        font-size:12px;
        margin-left:10px;
    }
`;

export const Button = styled.button`
    background-color: ${lighten(0.2, '#5C325D')};
    color: #fff;
    padding: 10px;
    border:none;
    transition: all 0.2s ease;

    &:hover{
        transition: all 0.2s ease;
        background-color: ${shade(0.1, '#5C325D')}
    }
`;




export const DeleteButton = styled.button`
    background:transparent;
    padding:0;
    border:none;
    display:flex;
    justify-content: center;
    align-items: center;
    color:#FF0B1A;
    transition: color 0.2s ease;
    font-size:16px;

    &:hover{
        transition: all 0.2s ease;
        font-size:18px;
        color: ${shade(0.2, '#FF0B1A')};
    }

`;



export const AddToListForm = styled(Form)`
    display:grid;
    justify-content:center;
    grid-template-columns: 1fr 50px;
    height:40px;
    /* border-radius:8px; */
    /* box-shadow: 1px 1px 1px ${shade(0.8,'#8D708E')}; */

    input[type="hidden"]{
        display:none;
        width:0px;
        height:0px;
        position:absolute;
    }


    >div>input{

        background:#fff;

        width:100%;
        
        border:none;
        /* border-radius:8px 0px 0px 8px; */
        padding: 10px;

    }

    >button{
        /* border-radius:0px 8px 8px 0px; */
        padding:0;
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
`;


export const ToDo = styled.li<ToDoProps>`
    animation: ${appearFromBottom} .5s;
    padding:10px;
    display:grid;
    grid-template-columns: 30px 2fr 30px;
    justify-content: stretch;
    align-items: center;
    height:auto;
    background-color:white;
     
    &+li{
        margin-top:5px;
    }

    >p{
        width:100%;
        word-break: break-all;
        white-space: normal;
    }

    >svg{
        color:#01C851;
    }

    ${props => props.checked && css`
        >svg{
            color:#01C851;
        } 
    `}
`;

