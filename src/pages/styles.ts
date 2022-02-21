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
    grid-template-rows: 100vh 1fr 1fr;
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
    width:100%;
    background-color:transparent;
    border-radius: 8px;
    transition:background 0.3;
    font-weight:bold;
    
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
    margin-top: 15px;
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

    grid-gap:30px;
    min-height:100vh;
    width:100%;
    justify-content:center;

    >main{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows:auto;
        padding:30px 150px 0px 150px;
        grid-gap:30px;
        place-items:center;
    }

    #githubProfileButton{
        width:250px;
        margin-top:10px;
        margin:auto;
        margin-top:30px;
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
    height:150px;

    background-color:rgba(18,18,18,0.5);

    >h1{
        margin-bottom:10px;
        font-size:36px;

        >svg{
            margin-right:10px;
        }
    }

    
`;

export const Skills = styled.div`
    /* min-height:100vh; */
    width:100%;
    display:flex;
    flex-direction:column;
    place-items: center;
    

    >div#skillsHeader{
        width:80vw;
        display:grid;
        grid-template-columns: 250px 1fr;
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


    >div:last-child{
        display: flex;
        flex-direction: column;
        place-items: center;
    }
`;

export const WorkExperiences = styled.div`
    /* min-height:100vh; */

    width:100%;
    display: grid;
    grid-template-rows: 150px 1fr;
    place-items: center;
    justify-content: center;
    
    >main{

        padding:30px 150px 30px 150px;
        width:100vw;
        display:grid;
        place-items: center;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: auto;
        grid-gap: 30px;
    }
`;
export const AboutMe = styled.div`
    min-height:100vh;
    width:100%;

   
`;