import Display from "./components/Display";
import BtnContainer from "./components/BtnContainer";
import { useState } from "react";

function App() {
  let [curValue, nextValue] = useState("");
  const btnclcik = (event) => {
    const btnValue = event.target.innerText;
    if (btnValue === "C") {
      nextValue("");
    } else if (btnValue === "=") {
      const result = eval(curValue);
      nextValue(result);
    } else {
      const disUpdate = curValue + btnValue;
      nextValue(disUpdate);
    }
  };
  return (
    <div id="calculator" className="p-4 m-auto w-3/12 bg-slate-900 rounded">
      <Display disValue={curValue} />
      <BtnContainer btnclick={btnclcik} />
    </div>
  );
}

export default App;
