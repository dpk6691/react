import { useState } from 'react'
import ColorPanel from './components/ColorPanel'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='w-screen h-screen' style={{ background: color }}>
        <div className="bg-slate-50 w-full p-4 grid grid-flow-col justify-stretch gap-4">
          <button className="p-3 rounded text-slate-50 font-bold " style={{ background: "red" }} onClick={() => setColor('red')}>Red</button>
          <button className=" p-3 rounded text-slate-50 font-bold " style={{ background: "lime" }} onClick={() => setColor('lime')}>Lime</button>
          <button className=" p-3 rounded text-slate-50 font-bold " style={{ background: "green" }} onClick={() => setColor('green')}>Green</button>
          <button className=" p-3 rounded text-slate-50 font-bold " style={{ background: "indigo" }} onClick={() => setColor('indigo')}>Indigo</button>
          <button className=" p-3 rounded text-slate-50 font-bold " style={{ background: "purple" }} onClick={() => setColor('purple')}>Purple</button>
          <button className=" p-3 rounded text-slate-50 font-bold " style={{ background: "blue" }} onClick={() => setColor('blue')}>Blue</button>
          <button className=" p-3 rounded text-slate-50 font-bold " style={{ background: "pink" }} onClick={() => setColor('pink')}>Pink</button>
        </div>
      </div>
    </>
  )
}

export default App