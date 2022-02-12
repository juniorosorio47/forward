import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color:transparent;
    display:grid;

    align-items:center;
    justify-content: center;
    flex-direction: column;
  
`;

export const StartPage = styled.div`
    height: 100vh;
    padding:300px;
    display: grid;
    text-align: center;

    >h1{
        font-size:64px;
        font-weight:500;
    }
    >p{
        margin-top:10px;
    }
  
`;

export const Buttons = styled.div`
    /* background-color:red; */
    width: 100%;
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-gap:20px;
    margin-top:20px;
    
    
    >button{
        color: #fff;
        border:2px solid #fff;
        height:50px;
        width:100%;
        background-color:transparent;
        border-radius: 8px;
        transition:background 0.3;
        font-weight:bold;

        &:hover{
            transition:background  0.3s;
            background-color:#333;

        }
    }
`;

export const Projects = styled.div`
    width:70%;
    height:50px;
    

`;