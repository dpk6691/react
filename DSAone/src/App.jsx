//import react from 'react'
import QuadrantFinder from './components/FindQuadrant'

function App() {
  return (
    <>
      <div className="grid grid-flow-row-dense grid-cols-3 grid-rows-3">
        <div><QuadrantFinder /></div>
        <div>02</div>
        <div>03</div>
        <div>04</div>
        <div>05</div>
      </div>
    </>
  )
}

export default App
