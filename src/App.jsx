import React from 'react'
import Calculator from './components/Calculator'

function App() {

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4 transition-all bg-gray-100 dark:bg-gray-900'>
      {/* Calculator */}
      <Calculator />
    </div>
  )
}

export default App
