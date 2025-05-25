import { useCallback, useState, useEffect } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+"
    
    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    alert("Password copied to clipboard!")
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4'>
      <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl w-full max-w-md'>
        <h1 className='text-4xl font-bold text-center text-white mb-8'>Password Generator</h1>
        
        <div className='bg-black/50 rounded-xl p-4 mb-6 flex items-center gap-4'>
          <input 
            type="text"
            value={password}
            readOnly
            className='bg-white/10 text-white text-xl w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button
            onClick={copyToClipboard}
            className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95'
          >
            Copy
          </button>
        </div>

        <div className='space-y-4'>
          <div className='flex items-center justify-between text-white'>
            <label className='text-lg'>Length: {length}</label>
            <input 
              type="range" 
              min={8} 
              max={16} 
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='w-48 accent-blue-500'
            />
          </div>

          <div className='flex items-center gap-4 text-white'>
            <label className='flex items-center gap-2 cursor-pointer'>
              <input 
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className='w-4 h-4 accent-blue-500'
              />
              <span className='text-lg'>Numbers</span>
            </label>

            <label className='flex items-center gap-2 cursor-pointer'>
              <input 
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className='w-4 h-4 accent-blue-500'
              />
              <span className='text-lg'>Characters</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
