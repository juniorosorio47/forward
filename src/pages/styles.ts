import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100vw;
    height: auto;
    background-color:transparent;

    display:grid;
    grid-template-columns:1fr;
    grid-template-rows: 100vh auto auto auto;
    grid-gap:60px;
    place-items: center;
  
`;


export const Logo = styled.div`

    display:flex;
    justify-content: center;
    /* background-color:red; */
    height:90%;

    >img{
        height:100%;
    }

`;
export const StartPage = styled.div`
    display: grid;

    align-items:center;
    justify-content: center;
    text-align: center;
    grid-template-rows: 200px 70px 30px 30px 60px;
    grid-template-columns:1fr;
    grid-gap: 10px;
    /* height:100vh; */
    width:600px;

    >h1{
        font-size:60px;
        font-weight:500;
    }
    >p{
        margin-top:10px;
    }
  
`;

export const ButtonLink = styled.a`
    color: #fff;
    border:2px solid #fff;
    height:50px;
    min-width:160px;
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

    /* background-color:red; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    
    >a{
        &+a{
            margin-left:20px;
        }
    }
`;

export const Projects = styled.div`
    
    display:flex;
    flex-direction: column;
    

    width:100%;
    place-items:center;

    >main{
        height:auto;
        display:grid;
        padding:30px 200px 0px 200px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows:auto;
        width:90%;

        grid-gap:50px;
        place-items: space-around;
    }

    #githubProfileButton{
        width:250px;
        margin:auto;
        margin-top:50px;

        >a{
            width:100%;
        }
    }
`;

export const SectionHeader = styled.header`
    grid-row:1/2;
    grid-column:1/4;

    display:flex;
    justify-content:center;
    align-items: center;
    flex-direction:column;
    width:100%;
    height:100px;

    background-color:rgba(18,18,18,0.5);

    >h2{
        margin-bottom:10px;
        font-size:30px;

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
        display: flex;
        flex-direction: column;
        place-items: center;
        padding:0px 200px 0px 200px;


        >div#skillsHeader{
            width:100%;
            display:grid;
            grid-template-columns: 200px 1fr;
            align-items:center;
            height:40px;
            margin-top:30px;
            margin-bottom:10px;
            border-radius:8px;
            background-color:rgba(18,18,18,0.8);

        >p{
            padding-left:20px;
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
        padding:30px 200px 30px 200px;
        width:90%;
        display:flex;
        place-items:center;
        grid-gap: 30px;
    }
`;


export const TagFooter = styled.footer`
    height:60px;

    display:flex;
    flex-wrap: wrap;
    align-items: flex-start;
    grid-gap:5px;

    justify-content: flex-start;
    padding:0px 15px 0px 15px;
`;

export const Tag = styled.span`
    /* background:; */
    height:30px;
    padding:8px;
    font-size:12px;
    /* border:1px solid #00D8FF; */
    background-color:#333;
    border-radius:8px;
`;

export const AboutMe = styled.div`
    min-height:100vh;
    width:100%;
    
    

    >main{
        
        padding:80px 200px 30px 200px;
        display:flex;
        place-items: center;
        width:100%;
        height:100%;
    }
`;

export const Profile = styled.div`
    height:100%;
    width:100%;
    display:grid;
    grid-gap:8px;
    flex-direction:column;
    place-items: center;


    >img{
        border:3px solid rgba(255,255,255,0.7);
        border-radius:8px;
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


    >div{
        display:grid;
        grid-template-rows: 30px 1fr;
        grid-template-columns: 1fr 1fr;
        grid-gap:10px;
        background-color:rgba(18,18,18,0.5);
        padding:10px;
        border-radius:8px;
        margin-top:20px;
        width:80%;

        >span{
            text-align:center;
            grid-column:1/3;
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

    }

`;

export const Description = styled.div`
    width:100%;
    height:100%;

    

    display:grid;
    grid-template-rows: 80px 200px 80px;
    grid-gap:50px;
    align-items:space-between;
    justify-content:center;
    text-align: center;
    
    >h1{
        align-self:flex-start;
        font-size:32px;
    }

    >main{
        width:500px;
        text-align:center;
        line-height:24px;
        display:grid;
        font-size:16px;
    }


    >div{
        display:grid;
        grid-gap:20px;
    }


`;


