import { useState } from "react";
import "./styles.scss";

/**
 * Calculator requirement
 *  - should have number pads with basic operations(+,-.*,/,*,Ac,history of operations, clear history, select an operation to resume)
 
    ---------------
    |  ---------- |
    |  |    2+3 | |
    |  ---------- |
    |   1 2 3 X   |
    |   4 5 6 (   |
    |   7 8 9 )   |
    |   + - % /   |
    |  . % AC =   |
    ---------------
 */
export const Calculator = () => {
  const [mathExpression, setMathExpression] = useState<string>('0');
  const [history, setHistory] = useState<Array<string>>([]);
  const [result, setResult] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleExpression = (event: any) => {
    if (event?.target?.innerHTML) {
      setMathExpression(prev => prev + event?.target?.innerHTML);
    }
  }

  const evaluateExpression = (exp) => {
    return Function(`return (${exp})`)()
  }
  const handleResult = () => {
    try {
      const result = evaluateExpression(mathExpression || '0');
      console.log("##value: ", result)
      setResult(result);
      setHistory(prev => [...prev, mathExpression])
      setMathExpression('');
      setError('');
    } catch (error) {
      console.log("##error: ", error);
      setError(error.message ?? 'Something went wrong')
    }
  }

  const handleBack = () => {
    if (mathExpression) {
      setMathExpression(mathExpression.substring(0, mathExpression.length - 1))
    }
  }

  const handleReset = () => {
    setMathExpression('');
    setResult('0');
    setError('');
  }

  return (
    <div className="calculator">
      <div className="result">{mathExpression || result}</div>
      {error && <div className="errorMessage"> {error} </div>}
      <div className="buttonsContainerGrid">
        <table>
          <tbody>
            <tr className="row">
              <td><button className="button" onClick={handleExpression}>1</button></td>
              <td><button className="button" onClick={handleExpression}>2</button></td>
              <td><button className="button" onClick={handleExpression}>3</button></td>
              <td><button className="button" onClick={handleBack}>X</button></td>
            </tr>
            <tr className="row">
              <td><button className="button" onClick={handleExpression}>4</button></td>
              <td><button className="button" onClick={handleExpression}>5</button></td>
              <td><button className="button" onClick={handleExpression}>6</button></td>
              <td><button className="button" onClick={handleExpression}>(</button></td>
            </tr>
            <tr className="row">
              <td><button className="button" onClick={handleExpression}>7</button></td>
              <td><button className="button" onClick={handleExpression}>8</button></td>
              <td><button className="button" onClick={handleExpression}>9</button></td>
              <td><button className="button" onClick={handleExpression}>)</button></td>
            </tr>
            <tr className="row">
              <td><button className="button" onClick={handleExpression}>0</button></td>
              <td><button className="button" onClick={handleExpression}>+</button></td>
              <td><button className="button" onClick={handleExpression}>-</button></td>
              <td><button className="button" onClick={handleExpression}>*</button></td>
            </tr>
            <tr className="row2">
              <td><button className="button" onClick={handleExpression}>/</button></td>
              <td><button className="button" onClick={handleExpression}>.</button></td>
              <td><button className="button" onClick={handleExpression}>%</button></td>
              <td><button className="button" onClick={handleReset}>AC</button></td>
            </tr>
            <tr className="row2">
              <td><button className="button equalButton" onClick={handleResult}>=</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}