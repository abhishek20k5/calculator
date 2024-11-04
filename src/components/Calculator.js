import React, { useState } from 'react';
import '../App.css';
import './Calculator.css';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setInput('');
            setResult('');
        } else if (value === '=') {
            try {
                setResult(eval(input)); // Use eval carefully in production
            } catch (error) {
                setResult('Error');
            }
        } else {
            setInput(input + value);
        }
    };

    return (
        <div className="calculator">
            <input type="text" value={input} disabled />
            <input type="text" value={result} disabled />
            <div className="buttons">
                {['7', '8', '9', '/'].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
                ))}
                {['4', '5', '6', '*'].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
                ))}
                {['1', '2', '3', '-'].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
                ))}
                {['0', '+', '=', 'C'].map((item) => (
                    <button key={item} onClick={() => handleButtonClick(item)}>{item}</button>
                ))}
            </div>
        </div>
    );
};

export default Calculator;