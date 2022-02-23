import styled from 'styled-components';

export const BackgroundGlass = styled.div`
    /* background properties */
    position:absolute;
    background-color:#121212;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index:-10;
    width:400px;
    height:580px;
    /* display properties */
    filter: blur(4px);
    border:solid 5px #121212;
    opacity:0.7;
    border-radius: 10px;
`;

export const ProjectContainer = styled.div`
    width:400px;
    height:auto;
    border-radius: 10px;
    display:grid;

    /* background-color:#121212; */
    grid-template-rows: 230px 40px 160px auto 85px;

    >p{
        padding:15px;
        line-height:28px;
        font-weight: 300;
        
    }

    >h2{
        padding:15px;
    }

    >div{
        padding:15px;
    }

    >iframe{
        border-radius: 10px;
        width:100%;
        height:100%;
    }
`;
