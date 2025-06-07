import React, { useEffect, useState } from 'react';
import CalcButton from './CalcButton';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [history, setHistory] = useState([]);

    // Load history from local storage
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('calc-history') || '[]');
        setHistory(saved);
    }, []);

    // Save history to local storage
    const addToHistory = (expression, result) => {
        const newHistory = [{ expression, result }, ...history.slice(0,9)];
        setHistory(newHistory);
        localStorage.setItem('calc-history', JSON.stringify(newHistory));
    };

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
                addToHistory(expression, evalResult);
            } catch (error) {
                console.log("Error", error);
                setResult('Error');
            }
        } else if ( value === '+/-') {
            setExpression((prev) => (prev.startsWith('-') ? prev.slice(1) : '-' + prev));
        } else {
            setExpression(prev => prev + value)
        }
    }

    // clear hsitory
    const clearHistory = () => {
        setHistory([]);
        localStorage.removeItem('calc-history');
    }

    return(
        <div className="flex gap-4">
            {/* Calcualtor Panel */}
            <div className="w-80 backdrop-blur-lg shadow-lg rounded-xl p-4">
                {/*Output  */}
                <div className='text-right text-3xl p-4 h-20 bg-rose-100 rounded mb-4 overflow-x-auto'>
                    {expression || result}
                </div>

                {/* Buttons */}
                <div className='grid grid-cols-4 gap-3'>
                    {buttons.flat().map((btn, i) => (
                        <CalcButton key={i} label={btn} onClick={handleClick} />
                    ))}
                </div>
            </div>


            {/* History Panel */}
            <div className="w-64 backdrop-blur-lg shadow-lg rounded-xl p-4 mt-4">
                <div className='flex justify-between items-center mb-2'>
                    <h2 className="text-lg font-bold">History</h2>
                    <button
                        onClick={clearHistory}
                        className='text-sm text-red-500 hover:underline'
                    >
                        Clear
                    </button>
                </div>
                <div className='space-y-2 max-h-96 overflow-auto'>
                    <AnimatePresence>
                        {history.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className='bg-white p-2 rounded shadow-sm text-sm'
                            >
                                <div className="text-rose-800">{item.expression}</div>
                                <div className="text-rose font-semibold">{item.result}</div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default Calculator