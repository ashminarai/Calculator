// import './App.css';
// import Header from './Header';
// import Main from './Main';
// import Sidebar from './Sidebar';
// import Apples from './Apples';

// function App() {
//   return (
//     <>
//     <Header name="Anna" color="purple"/>
//     <Main greet="Howdy"/>
//     <Sidebar greet="Howdy"/>
//     <Apples number="4" color="Red, Green"/>
//     </>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleReset = () => {
    setInput('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="show">
        <input type="text" value={input} readOnly />
        <div className="result"> = {result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={handleReset}>C</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
}

export default App;
