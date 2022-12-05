import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  let [currentNumber, setCurrentNumber] = useState(0);
  const [counterNumber, setCounterNumber] = useState(1);
  const [isIncrease, setIsIncrease] = useState(true);
  const [isAutoClick, setIsAutoClick] = useState(true);
  const [intervalTime, setIntervalTime] = useState(1000);

  const textPages = isIncrease ? "Increase" : "Decrease";
  const textBtn = isIncrease ? "Decrease" : "Increase";

  useEffect(() => {
    const interval = setInterval(() => {
      changeСounter();
    }, intervalTime);
    return () => clearInterval(interval);
  });

  const handleChange = (e) => setCounterNumber(e.target.value);
  const hendleIntervalTime = (e) => setIntervalTime(e.target.value);

  const changeСounter = () => {
    if (isAutoClick) {
      isIncrease
        ? setCurrentNumber((currentNumber += +counterNumber))
        : setCurrentNumber((currentNumber += -counterNumber));
    }
  };

  return (
    <div>
      <p>Current : {currentNumber}</p>
      <p>
        {textPages} : {counterNumber}
      </p>
      <input type="text" value={counterNumber} onChange={handleChange} />
      <button onClick={changeСounter}>Execute {textPages}</button>
      <button onClick={() => setIsIncrease(!isIncrease)}>{textBtn}</button>
      <input value={intervalTime} onChange={hendleIntervalTime} />
      <button onClick={() => setIsAutoClick(!isAutoClick)}>Auto Click</button>
    </div>
  );
}

export default App;
