import React, { useState } from 'react';
import CalcButton from './CalcButton';

const buttons = [
    ['C', '⌫', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['+/-', '0', '.', '='],
];

function Calculator() {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState('0');

    const handleClick = (value) => {
        if (value === 'C') {
            setExpression('');
            setResult('0');
        } else if (value === '⌫') {
            setExpression(prev => prev.slice(0, -1))
        } else if (value === '=') {
            try {
                const evalResult = Function('"use strict"; return (' + expression + ')')();
                setResult(evalResult.toString());
                setExpression(evalResult.toString());
            } catch (error) {
                console.log("Error", error);
                setResult('Error');
            }
        } else if ( value === '+/-') {
            if (expression) {
                if (expression.startsWith('-')) {
                    setExpression(expression.slice(1));
                } else (
                    setExpression('-' + expression)
                )
            }
        } else {
            setExpression(prev => prev + value)
        }
    }

    return(
        <div className="w-80 bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-xl p-4">
             {/*Output  */}
            <div className='text-right text-3xl p-4 h-20 bg-gray-100 dark:bg-gray-700 rounded mb-4 overflow-x-auto'>
                {expression || result}
            </div>

            {/* Buttons */}
            <div className='grid grid-cols-4 gap-3'>
                {buttons.flat().map((btn, i) => (
                    <CalcButton key={i} label={btn} onClick={handleClick} />
                ))}
            </div>
        </div>
    )
}

export default Calculator