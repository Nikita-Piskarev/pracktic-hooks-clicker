import "./App.css";
import React, { useState } from "react";

function App() {
  let [currentNumber, setCurrentNumber] = useState(0);
  const [counterNumber, setCounterNumber] = useState(1);

  const textIncOrDec = counterNumber >= 0 ? "Increase" : "Decrease";

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setCounterNumber(value);
  };
  const changeСounter = () => {
    setCurrentNumber((currentNumber += +counterNumber));
  };

  return (
    <div>
      <p>Current : {currentNumber}</p>
      <p>
        {textIncOrDec} : {counterNumber}
      </p>
      <input type="text" value={counterNumber} onChange={handleChange} />
      <button onClick={changeСounter}>Execute {textIncOrDec}</button>
    </div>
  );
}

export default App;
