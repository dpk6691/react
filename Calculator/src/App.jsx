import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";

function App() {
  return (
    <div id="calculator" className="p-4 m-auto w-3/12 bg-slate-50 rounded">
      <Display />
      <BtnContainer />
    </div>
  );
}

export default App;
