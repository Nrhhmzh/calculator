import React from 'react'
import { Button } from '@mui/material'

function CalcButton({ label, onClick }) {

  const isOperator = ['+', '-', '*', '/', '=', '%'].includes(label)

  return (
    <Button
      variant={isOperator ? 'contained' : 'outlined'}
      onClick={() => onClick?.(label)}
      className='!text-lg !p-4 !rounded-lg !border-gray-300 dark:!border-gray-600 dark:!text-white'
      fullWidth
    >
      {label}
    </Button>
  )
}

export default CalcButton