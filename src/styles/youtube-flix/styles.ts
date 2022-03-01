import { Form } from '@unform/web';
import styled, { css } from 'styled-components';


interface IHomePageHeaderProps{
    backgroundImageUrl:string;
}

interface ICardProps{
    backgroundImageUrl:string;
}

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display:grid;
  grid-template-rows: 85% 1fr;
  overflow:auto;


  /* background-color:#d4d4d4; */
`;

export const NavBar = styled.div`
    /* background-color: red; */
    
    height:68px;
    width:100%;
    padding: 0px 60px;
    display:grid;
    place-items: center;
    grid-template-rows: 100%;
    grid-template-columns: 100px 1fr 1fr;
    background:linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0));
    position:absolute;
    top:0;
    left:0;

    >div{
        >img{
            width:100%;
            
        }
    }
    

    >ul{
        justify-self:flex-start;
        width:55%;
        padding: 0px 30px;
        display:flex;
        justify-content:space-between;
        align-items:center;
        list-style:none;
        font-size:14px;

       
    }
`;

export const SearchForm = styled(Form)`
    justify-self:flex-end;
    >div{

        background-color:#141414;
        height:100%;
        align-items: center;
        justify-content: center;
        border: 1px solid #777;
        
        

        >svg{
            margin-left: 10px;
            color:#fff;
        }

        >input{
            color:#fff;
            height:36px;
            width:260px;
            &::placeholder {
                color: #777;
            }

        }
    }
`;


export const HomePageHeader = styled.header<IHomePageHeaderProps>`
    
    /* background-color: blue; */
    background-repeat: no-repeat, repeat;
    background-size:100%;

    ${props=>css`
        background-image:linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url(${props.backgroundImageUrl});
    `}}

    height:100%;
    width:100%;
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding:80px 60px;
    

    >img{
        width:36%;
        margin: 30px 0px;
    }

    >h1{
        z-index:100;
        font-size:24px;
        font-weight:700;
    }

    >p{
        width:36%;
        margin: 30px 0px;
        font-size:20px;
        font-weight:550;
    }

    >div{
        width:36%;
        height:50px;
        display:flex;
        justify-content: flex-start;
        
        >button:first-child{
            width:155px;
            margin-right:30px;
            background:#fff;
            color:#000;
        }

        >button{
            font-weight:bold;
            border:none;
            background:#333;
            color:#fff;
            display:flex;
            justify-content: center;
            align-items: center;
            font-size: 18px;
            width:246px;
            height:100%;
            padding:0;
            margin:0;
            border-radius: 5px;
            

            >p{
                font-size:18px;
                
            }

            >svg{
                font-size:26px;

                margin-right:10px;
            }

            &:hover{
                opacity:0.6;
            }


        }
        

    }



`;


export const Main = styled.main`
    /* background-color: green; */
    height:100%;
    width:100%;
    padding: 0px;
    margin: 0px;

`;


export const Card = styled.div<ICardProps>`
    background-color:red;
    ${props=>css`
        background-image: url(${props.backgroundImageUrl});
    `}}
    border-radius: 5px;
    background-position: center;
    background-size: cover;



    width:290px;
    height:165px;
    display:flex;
    flex-direction:column;
`;

export const CardContent = styled.div`

`;

export const CardFooter = styled.footer`

`;

export const Category = styled.div`
    display:flex;
    flex-direction:column;
    padding:0px 0px 0px 60px;
    /* background-color:green; */
    height:280px;
    max-width:100vw;
    justify-content: center;

    >h2{
        margin-bottom:10px;
        margin-left:5px;
        font-weight:bold;
    }

    >div{
        overflow:hidden;
        background-color:transparent;
        display:grid;
        grid-template-columns:repeat(6, 1fr);
        grid-template-rows:1fr;
        grid-auto-flow: column;
        grid-gap:10px;
        place-items:center;

        /* background-color:red; */
    }

`;


