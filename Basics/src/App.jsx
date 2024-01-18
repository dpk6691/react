import { useState } from 'react'

function App() {

  let [counter, changevalue] = useState(0);

  const addValue = () => {
    changevalue(counter + 1);
    if (changevalue > 2) {
      return changevalue = 2
    }
  }
  const removeValue = () => {
    changevalue(counter - 1);
  }

  return (
    <>
      <h1>Click =  {counter}</h1>
      <button onClick={addValue}>Add</button> <button onClick={removeValue}>Remove</button>
    </>
  )
}

export default App
