import styled from 'styled-components';

export const Container = styled.div`
  background: red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  >h1 {
    margin-bottom:20px;
  }
`;

export const CalculatorBody = styled.div`
  background: blue;
`;

export const CalculatorInput = styled.input`
`;

export const CalculatorButtons = styled.div`
`;
