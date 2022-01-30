import { shade, lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background:#01325F;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  #delete{
    color: ${lighten(0.1, 'red')};
  }

  >h1 {

    margin-bottom:10px;
  }

  >span{
    margin-bottom: 15px;
    font-size:12px;
    font-weight: medium;
    margin-bottom: 40px;
  }

  >div{

    width:auto;
    height:auto;
    display:grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    justify-content:center;
    grid-gap:50px;
  }
`;

export const CalculatorBody = styled.div`
  box-sizing: border-box;
  width:320px;
  height:auto;
  max-height:480px;
  display:grid;
  grid-gap:2px;
  background: radial-gradient(circle, ${lighten(0.2, '#1076C5')} 0%,  #1076C5 93%, #1076C5 100%);
  padding:15px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px ${lighten(0.3, '#000')};
  justify-content:stretch;
  align-items:center;
  grid-template-rows: 100px 60px 290px;

  
`;

export const CalculatorInput = styled.div`
  box-sizing: border-box;
  
  text-align:right;
  height:auto;
  max-height:100px;
  display:flex;
  flex-direction:column;
  background-color: ${lighten(0.1, '#121212')};
  color: #fff;
  padding:10px;
  border-radius: 8px;
  max-width:100%;

  overflow:auto;

  >span{
    font-size:20px;
  }

  >input{
    overflow:auto;
    background-color: transparent;
    color:${shade(0.1, '#fff')};
    width:100%;
    max-width:100%;
    height:50px;
    border:none;
    border-bottom: 1px solid #fff;
    
    margin-bottom: 5px;

    padding:0;
    text-align:right;
    box-sizing: border-box;
    padding:5px;
    font-size: 18px;

    &:focus{
      outline: none;
    }
  }
`;

export const CalculatorNumbers = styled.div`
  margin-top: 5px;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap:5px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:auto;

  >button {
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height:70px;
    font-size: 24px;
    font-weight: 500;
    background: ${lighten(0.09, '#121212')};
    /* box-shadow: 1px 1px 1px ${lighten(0.3, '#fff')}; */
    border:none;
    color: #fff;

    &:hover{
      background: ${shade(0.8, '#121212')};
      transition: background 0.3s;
      box-shadow: 1px 1px 2px ${shade(0.3, '#1076C5')};

    }
  }
`;

export const CalculatorOperators = styled.div`

  margin-bottom: 5px;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  grid-gap:5px;
  
  >button {
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #fff;
    height:45px;
    background: #123F81;
    border: none;
    width: 100%;
    font-size: 24px;
    font-weight: 400;
    padding: 0;

    &:hover{
      background: ${shade(0.5, '#123F81')};
      transition: background 0.3s;
    }
    
    &+button{
      border-left: 1px solid #000;
    }
  }
`;

export const History = styled.div`
  background: radial-gradient(circle, ${shade(0.2, '#1076C5')} 0%,  #1076C5 93%, #1076C5 100%);
  border-radius: 10px;
  max-width:400px;
  width:300px;
  height:auto;
  max-height:400px;
  padding:10px;
  box-shadow: 0px 0px 10px ${lighten(0.3, '#000')};
  text-align:center;
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 5fr;
  max-height:460px;
  
  
  span{
    font-size:12px;
    font-weight:300;
    color: ${shade(0.1, '#fff')};
  }

  >div{
    box-sizing: border-box;
    overflow:auto;
    padding-right:10px;
    top: 0;
    left: 0;
    width:100%;
    height:100%;
    max-width:300px;
    
  }


  >div>p{
    text-align:left;
    font-size:18px;
    background:#2C2C2C;
    border-radius:5px;
    padding:10px;
    overflow:auto;
    width:100%;
    
    box-sizing: border-box;




    &+p{
      margin-top:8px;
    }
  }


  >header{
    border-bottom:2px solid rgba(255,255,255,0.1);
    margin-bottom:10px;
    display:flex;
    justify-content: flex-start;
    align-items: center;
    grid-gap:10px;
    padding:5px;

    >button {
      display:flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      background: transparent;
      border: none;
      font-size: 18px;
      font-weight: 200;
      padding: 5px;
      color: red;

      &:hover {
        color:${shade(0.2, 'red')};
      }
    }
    

    >h3{
      font-size:18px;
      text-align:center;
      padding-bottom:5px;
    }
  }

`;

