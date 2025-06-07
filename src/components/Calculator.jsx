import React from 'react';
import CalcButton from './CalcButton';

function Calculator() {
    const buttons = [
        ['C', '⌫', '%', '/'],
        ['7', '8', '9', '*'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['+/-', '0', '.', '='],
    ];

    return(
        <div className="w-80 bg-white dark:bg-gray-800 text-black dark:text-white rounded-xl shadow-xl p-4">
             {/*Output  */}
            <div className='text-right text-3xl p-4 h-20 bg-gray-100 dark:bg-gray-700 rounded mb-4'>
                0
            </div>

            {/* Buttons */}
            <div className='grid grid-cols-4 gap-3'>
                {buttons.flat().map((btn, i) => (
                    <CalcButton key={i} label={btn} />
                ))}
            </div>
        </div>
    )
}

export default Calculator