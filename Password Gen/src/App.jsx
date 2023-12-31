import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [number, setNumber] = useState(false);
  const [characters, setCharacters] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let strng = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (number) strng += "0123456789";
    if (characters) strng += "{}[]?/><!@#$%^&*()-+=";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * strng.length + i)
      pass += strng.charAt(char)
    }

    setPassword(pass)


  }, [length, number, characters, setPassword])

  const CopyPasstoClip = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, characters, passwordGenerator])

  return (
    <>
      <div className='bg-slate-900 w-screen h-screen flex justify-center items-center'>
        <div className='p-4 bg-slate-700 rounded-lg'>
          <h1 className='text-white text-center text-xl mb-4'>Password Generator</h1>
          <div className='w-100'>
            <input className='w-80 p-3 rounded-md font-bold text-xl' type="text" value={password} readOnly ref={passwordRef} />
            <button onClick={CopyPasstoClip} className='p-3 w-20 rounded-md font-bold ml-3 bg-green-600 text-white'>Copy</button>
          </div>
          <div className='w-100 mt-3 flex justify-between text-white items-center '>
            <span><input type="range" id="vol" name="vol" min="6" max="24" onChange={(e) => { setLength(e.target.value) }} value={length}></input> Length ({length})</span>
            <span>
              <input type="checkbox" id="number" name="num" value="Bike" onChange={() => { setNumber((prev) => !prev) }} />
              <label htmlFor="number"> Numbers</label>
            </span>
            <span>
              <input type="checkbox" id="charactor" name="char" value="Car" onChange={() => { setCharacters((prev) => !prev) }} />
              <label htmlFor="charactor"> Characters</label>
            </span>
          </div>
        </div>
      </div>
    </>
  )

}

export default App
