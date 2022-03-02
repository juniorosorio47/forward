import styled from 'styled-components';


export const Container = styled.div`
  font-family:'Arial', sans-serif;
  position: absolute;
  top: 0;
  left:0;
  /* width: 100%; */
  height: auto;
  display:grid;
  grid-gap: 30px;
  text-shadow:1px 1px 5px #000;
  width:auto;
  background-color:#121212;
  line-height:30px;

  h1{
    font-weight:600;
  }

  >div>h2{
    font-weight:bold;
  }


  >header{
    display:grid;
    place-items:center;
    grid-gap:15px;
    padding-top:100px;

    >h3{
      
      color:#fff;
      opacity:0.8;
    }

    >img{
      width:200px;
      border-radius:200%;
      margin-bottom:10px;
      box-shadow: 0px 0px 10px #000;
    }
  }
  
  padding:0px 20px 20px 20px;

  @media only screen and (min-width: 768px) {
    padding:50px 200px 50px 200px;

    >div>h2{
      font-size:26px;
    }

    >h1{
      font-size:48px;
    }

    >header{
      font-size:26px;

      >img{
        width:300px;
      }
    }
  }
`;

export const Info = styled.div`
  display:grid;
  grid-template-rows: 40px 1fr;
  
  >div{
    background-color:#1E1E1E;
    box-shadow: 2px 2px 10px #000;
    padding:10px;
    border-radius:8px;

  }


  @media only screen and (min-width: 768px) {
    
  }
  
`;

export const PersonalDetails = styled.div`
  display:grid;
  grid-template-rows: 40px 1fr;
  

  >div{
    box-shadow: 2px 2px 10px #000;
    background-color:#1E1E1E;
    padding:10px;
    border-radius:8px;
    
  }
`;

export const WorkingExp = styled.div`
  display:grid;
  grid-gap:20px;
  grid-template-rows: 40px 1fr;
  
  /* padding:20px; */




  >main{
    display:grid;
    grid-gap:20px;
    justify-content: center;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
  }

  @media only screen and (min-width: 768px) {
    >main{
      grid-template-columns: 1fr 1fr 1fr;
    }

    
  }
`;

export const EducationalBackground = styled.div`
  /* Educational background */
  /* padding:20px; */
  
  >main {
    
    display:grid;
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-gap:20px;
    border-radius:8px;
    margin-top:20px;
    /* width:100%; */

    >span{
        text-align:center;
        font-weight:600;
    }

    >div{
      box-shadow: 2px 2px 10px #000;
      background-color:#1E1E1E;
      border-radius:8px;
      padding:10px;
      display:grid;
      place-items:center;
      line-height:25px;
      grid-gap:8px;

      >h3>a{
          font-size:16px;
          &:hover {
              color: #d4d4d4;
          }
      }


      >p{
          font-size:16px;
          font-weight:300;
      }

      >span{
          font-size:14px;
          font-weight:200;
      }
    }
  }


  @media only screen and (min-width: 768px) {
    >main{
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export const Skills = styled.div`
  display:grid;
  grid-gap:20px;

  >div{
    border-radius:8px;
    padding:10px;
    background-color:#1E1E1E;
    box-shadow: 2px 2px 10px #000;
  }

`;
export const ExportButton = styled.button`
  position:absolute;
  top:0;
  right:0;
  z-index:1000;
  margin:30px;
  
  height:50px;
  padding:10px;
  border:3px solid #fff;
  background:none;
  color: #fff;
  border-radius:8px;

  &:hover{
    background:#1E1E1E;
  }



`;