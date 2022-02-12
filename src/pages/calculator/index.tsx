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

  // Calculate and set result values.
  const calculate = useCallback( (): void => {
    // Check if calc variable is empty or the last calc item is an operator and return empty.
    if(calc==='' || operators.includes(calc.slice(-1))) return;
    
    // Set result using javascript eval function.
    // Eval: evaluates a string expression to a number value.
    setResult(eval(calc).toString());

    console.log(history)

    const newHistoryItem = `${calc} = ${result}`;

    let historyCopy = history;

    historyCopy.push(newHistoryItem);

    // Store calc and result to history
    setHistory([...historyCopy]);
    
    // Set calc with result value.
    setCalc(result);

  },[calc, history]);


  // Delete the last calc item
  const deleteLast = useCallback( (): void=>{
    
    // Set calc removing the last item.
    setCalc(calc.slice(0, -1));

    // If calc is already empty it sets result to empty and return empty.
    if(calc==='') {
      setResult('');
      
      return;
    }

  },[calc, result]);

  // Clear calc and result
  const clearAll = useCallback( (): void => {
    // if calc is empty it return empty.
    if(calc==='') return;

    // Set result and calc as empty strings.
    setResult('');
    setCalc('');
  },[calc, result]);

  // Clear calculator history
  const clearHistory = useCallback( ()=>{
    setHistory([]);
    
  },[history]);

  // Update calc and result while the numbers are typed.
  const updateCalc = useCallback( (value): void => {

    // Check if calc is empty and if the value is an operator or the last value is an operator and return empty.
    if(operators.includes(value) && calc==='' || operators.includes(value) && operators.includes( calc.slice(-1) ) ){
      return;
    }

    // Set calc string adding the value to calc.
    setCalc(calc + value);

    // Check if value is an operator before set result value.
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
            <button onClick={() => clearAll()}>C</button>
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
          <button key={'clear'} onClick={clearHistory}> <FiTrash2/> </button>
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