import { readableColor } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 100vw;
    top:0;
    left:0;
    display:flex;
    flex-direction: column;
    /* background-color:#333; */



    @media only screen and (min-width: 768px){
        background-color:transparent;

        display:grid;
        grid-template-columns:1fr;
        place-items:center;
        grid-template-rows: 100vh auto auto auto;
        grid-gap:60px;
        
        
    }

  
`;


export const Logo = styled.div`

    display:grid;
    place-items:center;
    height:100%;
    width:100%;
    padding:20px;

    >img{
        height:200px;

        @media only screen and (min-width: 768px) {
            width:100%;
        }
        
    }

`;


export const ButtonLink = styled.a`
    color: #fff;
    border:2px solid #fff;
    height:60px;

    background-color:transparent;
    border-radius: 8px;
    transition:background 0.3;
    font-weight:500;
    
    display:flex;
    justify-content: center;
    align-items:center;

    >svg{
        margin-right:20px;
        height: 25px;
        width:25px;
    }

    &:hover{
        transition:background  0.3s;
        background-color:#333;

    }
`;
export const ButtonsContainer = styled.div`
    display: grid;
    place-items: center;
    height:100%;
    grid-gap:10px;
    

    >a{
        width:100%;
    }


    @media only screen and (min-width: 768px) {
        display: flex;
        grid-gap:0px;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        align-items: center;
        text-align: center;
        
        >a{
            &+a{
                margin-left:20px;
            }
        }
    }
    
`;

export const StartPage = styled.div`
    
    display: grid;
    align-items:center;
    /* grid-gap:30px; */
    text-align: center;
    width:100%;
    height:100vh;
    align-content: center;
    margin-bottom:30px;

    /* padding:60px 0px 60px 0px; */
    
    grid-template-rows: 300px 160px .8fr;
    grid-template-columns:1fr;


    >${ButtonsContainer}{
        padding:20px;

        >a{
            max-width:180px;
        }

        
    }
    
    >main{
        display:grid;

        grid-gap:10px;
        height:auto;

        >h1{
            font-size:36px;
            font-weight:500;
        }

        >p{
            color:#00D8FF;
            font-size:18px;
            font-weight:500;
        }

    }

    @media only screen and (min-width: 768px) {
        grid-template-rows: 200px 160px .2fr;
        grid-template-columns:1fr;
        grid-gap: 30px;
        width:50%;
        max-width:740px;
        height:100%;
        align-content: center;

        >main{
            >h1{
                font-size:52px;
                font-weight:500;
            }

            >p{
                margin-top:10px;
                color:#00D8FF;
                font-weight:500;
                font-size:18px;
            }
        }
    }

  
`;

export const Projects = styled.div`
    width:100%;
    display: grid;
    grid-template-rows: 100px auto 100px;
    grid-template-columns: 1fr;
    place-items: center;

    
    
    
    >main{  
        width:90%;
        display:flex;
        flex-direction:column;
        place-items:center;
        align-items:flex-start;
        /* background-color:red; */
        grid-gap: 30px;
        padding-top:30px;

        @media only screen and (min-width: 768px) {
            flex-direction:row;
            display:grid;
            grid-template-columns: 1fr 1fr 1fr;
        }
    }

    #githubProfileButton{
        width:250px;
        margin:auto;
        place-items:center;

        >a{
            width:100%;
        }
    }


    
`;

export const SectionHeader = styled.header`
    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    width:100%;
    height:100px;
    
    
    text-align:center;
    background-color:rgba(102, 102, 102,0.4);

    >h2{
        margin-bottom:10px;
        font-size:24px;
        

        >svg{
            margin-right:10px;
        }

    }

    >h1{
        margin-bottom:10px;
        font-size:36px;

        >svg{
            margin-right:10px;
        }
    }
    
`;

export const Skills = styled.div`
    width:100%;
    display:grid;
    flex-direction:column;
    place-items: center;
    grid-template-columns: 1fr;

    >main{
        width:90%;

        >div#skillsHeader{
            width:100%;
            display:grid;
            grid-template-columns: 1fr 1.2fr;
            align-items:center;
            justify-content: space-between;
            height:40px;
            margin-top:30px;
            margin-bottom:10px;
            border-radius:8px;
            background-color:rgba(102, 102, 102,0.6);
            >p{
                font-weight:400;
                padding-left:20px;
                font-size:14px;
            }
        }
        

    }


    @media only screen and (min-width: 768px) {
        >main{
            width:90%;
            display: flex;
            flex-direction: column;
            place-items: center;
            /* padding:0px 200px 0px 200px; */


            >div#skillsHeader{
                grid-template-columns: 200px 1fr;
            }
        }
    }
`;

export const WorkExperiences = styled.div`

    width:100%;
    display: grid;
    grid-template-rows: 150px 1fr;
    grid-template-columns: 1fr;
    place-items: center;
    
    >main{
        width:90%;
        display:flex;
        flex-direction:column;
        place-items:center;
        align-items:flex-start;
        grid-gap: 30px;
        padding-bottom:30px;

        @media only screen and (min-width: 768px) {
            flex-direction:row;
        }
    }
`;


export const TagFooter = styled.footer`
    height:100%;
    width:100%;
    display:flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  



`;

export const Tag = styled.span`
    /* background:; */
    height:35px;
    padding:10px;
    font-size:11px;
    font-weight:bold;
    display:flex;
    place-items: center;
    border:1px solid #00D8FF;
    color: #00D8FF;
    border-radius:8px;
    margin:0;
    margin-right:10px;

    
`;

export const AboutMe = styled.div`
    width:100%;
    height:100vh;
    display: grid;
    grid-template-rows: 100px 1fr;
    grid-template-columns: 1fr;
    place-items: center;
    

    
    >main{
        display:grid;
        place-items: center;
        width:100%;
        height:auto;
        padding: 50px 0px 50px 0px;
        


        @media only screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;


        }
    }
`;

export const Profile = styled.div`
    height:100%;
    
    display:grid;
    

    flex-direction:column;
    place-items: center;


    >img{
        border:3px solid rgba(255,255,255,0.7);
        border-radius:200%;
        width:250px;
        margin-bottom:10px;
    }

    >h2{
        font-size:36px;
        font-weight:500;
    }

    >span{
        font-size:20px;
        font-weight:300;
    }

    /* Educational background */
    >div{
        display:grid;
        grid-template-rows: 30px 1fr 1fr;

        grid-template-columns: 1fr;
        grid-gap:10px;
        background-color:rgba(102,102,102,0.5);
        padding:10px;
        border-radius:8px;
        margin-top:20px;
        /* width:100%; */

        >span{
            text-align:center;
            font-weight:600;
        }

        >div{
            background-color:#121212;
            border-radius:8px;
            padding:10px;
            display:flex;
            place-items:center;
            flex-direction:column;
            line-height:25px;

            >h3>a{
                font-size:16px;
                &:hover {
                    color: #d4d4d4;
                }
            }


            >p{
                font-size:14px;
                font-weight:300;
            }

            >span{
                font-size:12px;
                font-weight:200;
            }
        }

        @media only screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;

            >span{
                grid-column: 1/3;
                grid-row: 1;
            }
        }

    }

    @media only screen and (min-width: 768px) {
        grid-template-rows: 250px 60px 60px 300px;
        place-items:center;
    }

   

`;

export const Description = styled.div`
    width:100%;
    height:100%;
    padding:15px;
    padding-bottom:60px;

    display:grid;
    grid-template-rows: 80px 350px 150px;
    grid-gap:20px;
    align-items:space-between;
    justify-content:center;
    text-align: center;

    
    
    >h1{
        align-self:flex-start;
        font-size:28px;
    }

    >main{
        width:500px;
        text-align:center;
        line-height:24px;
        display:grid;
        font-size:18px;
        grid-gap:20px;
        place-items: center;

        >p{
            color: ${readableColor('#000')};
            font-weight:400;
            max-width: 90%;
            font-size:18px;
            text-align:center;

        }
    }


    >div{
        display:grid;
        grid-gap:20px;
    }


`;


