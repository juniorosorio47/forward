import Head from "next/head";
import { useCallback, useMemo, useState } from "react";
import { FiDelete, FiTrash2 } from "react-icons/fi";

import { Container, CalculatorBody, CalculatorInput, CalculatorNumbers, CalculatorOperators, History } from '../styles/calculator';

const Calculator: React.FC = () => {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState(['']);

  const operators = useMemo( ()=>['+', '-', '*', '/', '.'], [])

  // Creates the digits buttons
  const digits = useMemo( ()=>{ 
    // Create an array of numbers from 0 until 9.
    const numbers:any = Array.from(Array(10).keys());

    // Add the dot to the array.
    numbers.push('.');

    // Insert the number 0 to the last position.
    numbers.push(Number(numbers.shift()));

    // Insert equal sign to the array.
    numbers.push('=');
    
    return numbers;
  }, [] );


  const calculate = useCallback( ()=>{
    if(calc==='' || operators.includes(calc.slice(-1))) return;
    
    setResult(eval(calc).toString());
    
    
    setHistory([...history, `${calc} = ${result}`]);
    
    setCalc(result);

  },[calc]);


  const deleteLast = useCallback( ()=>{
    console.log(calc)
    
    
    setCalc(calc.slice(0, -1));

    if(calc==='') {
      setResult('');
      
      return;
    }

  },[calc]);

  const deleteAll = useCallback( ()=>{
    if(calc==='') return;

    setResult('');
    setCalc('');
  },[calc]);

  const clearHistory = useCallback( ()=>{
    setHistory([]);
  },[calc]);

  const updateCalc = useCallback( (value)=>{

    if(operators.includes(value) && calc==='' || operators.includes(value) && operators.includes( calc.slice(-1) ) ){
      return;
    }

    setCalc(calc + value);

    if(!operators.includes(value)){
      setResult(eval(calc + value).toString());
    }
  }, [calc, result])





  return <Container>
    <Head>
        <title>Calculator</title>
    </Head>
    <h1>Forward Online Calculator</h1>
    <span>Click at the numbers and operators to use the calculator!</span>
    <div>
      <CalculatorBody>
          <CalculatorInput>
            <input 
              onChange={(event)=>{updateCalc(event.target.value)}}
              type="text" 
              readOnly
              value={calc ? calc : '0'} 
              onKeyPress={(event) => {
                if (!/^(\+|-|\*|\/|=|%|[0-9])$/.test(event.key)) {
                  event.preventDefault();
                }
              }}

            />
            <span>= {result ? result : '0'}</span>
          </CalculatorInput>
          <CalculatorOperators>
            <button onClick={() => updateCalc('+')}> + </button>
            <button onClick={() => updateCalc('-')}> - </button>
            <button onClick={() => updateCalc('*')}> x </button>
            <button onClick={() => updateCalc('/')}> / </button>
            <button onClick={() => deleteAll()}>C</button>
            <button id="delete" onClick={() => deleteLast()}><FiDelete/></button>
          </CalculatorOperators>
          <CalculatorNumbers>
            {digits.map((digit:any)=>{
              if(digit==='='){
                return (
                  <button key={digit} onClick={() => calculate()}> { digit } </button>
                )
              }else{
                return (<button key={digit} onClick={() => updateCalc(digit.toString())}> { digit } </button>)
              }

            })
            }

          </CalculatorNumbers>
        
      </CalculatorBody>

      <History>
        <header>
          <h3>History <span>(Press "=" to save at history)</span></h3>
          <button key={'clear'} onClick={() => clearHistory()}> <FiTrash2/> </button>
        </header>
        <div>
          {history.length>0 ? history.map(item=>{
            if(item === ''){
              return;
            }else{
              return(
                <p>{item}</p>
              )
            }
          }): (<span>Empty history</span>) }
        </div>
      </History>

    </div>
    


  </Container>;
}

export default Calculator;