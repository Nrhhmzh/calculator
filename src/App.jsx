import React from 'react'
import './index.css'; 
import Calculator from './components/Calculator'

function App() {
  return (
    <div className="relative min-h-screen px-4 py-8 flex flex-col items-center justify-center gap-4 overflow-hidden bg-rose-50">

      {/* Blobs Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-pink-300 opacity-30 rounded-full mix-blend-multiply filter blur-xs animate-blob-1"></div>

      <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-red-300 opacity-30 rounded-full mix-blend-multiply filter blur-xs animate-blob-2"></div>

      <div className="absolute bottom-[-10%] left-[30%] w-[400px] h-[400px] bg-rose-400 opacity-30 rounded-full mix-blend-multiply filter blur-xs animate-blob-3"></div>

      <div className="absolute top-[20%] left-[60%] w-[300px] h-[300px] bg-violet-400 opacity-30 rounded-full mix-blend-multiply filter blur-xs animate-blob-4"></div>

      {/* Calculator */}
      <Calculator />
    </div>
  )
}

export default App