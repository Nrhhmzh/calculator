import React from 'react'
import { Button } from '@mui/material'

function CalcButton({ label, onClick }) {

  const isOperator = ['+', '-', '*', '/', '=', '%'].includes(label)

  return (
    <Button
      variant={isOperator ? 'contained' : 'outlined'}
      onClick={() => onClick?.(label)}
      className={`!text-lg !p-4 !rounded-lg !transition-colors duration-200
        ${isOperator 
          ? '!bg-rose-500 hover:!bg-rose-600 !text-white' 
          : '!text-rose-500 hover:!bg-rose-50 !border-gray-300'}
      `}
      fullWidth
    >
      {label}
    </Button>
  )
}

export default CalcButton