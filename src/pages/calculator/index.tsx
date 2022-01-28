import Head from "next/head";

import { Container, CalculatorBody, CalculatorInput, CalculatorButtons } from '../styles/calculator';

const Calculator: React.FC = () => {
  return <Container>
    <Head>
        <title>Calculator</title>
    </Head>
    <h1>Forward Online Calculator</h1>
    <CalculatorBody>
        <CalculatorInput type="text"/>
        <CalculatorButtons>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </CalculatorButtons>

    </CalculatorBody>


  </Container>;
}

export default Calculator;