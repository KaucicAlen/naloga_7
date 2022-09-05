import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import Time from "./Time";
import Counter from "./Counter";

export default function App() {
  const [actualTime, setActualTime] = useState(new Date());
  const [counterObject, setCounterObject] = useState({ value: 0 });
  const renders = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActualTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const addOneHandler = () => {
    counterObject.value++;
    setCounterObject(counterObject);
  };

  //renders.current++; causes the render loop

  return (
    <div className="App">
      <h1>TEST 7 - React (part 3 - optimization and bug fix)</h1>
      <div className="description">
        1. The "App" component renders too many times, it should render just
        once. Fix it keeping in consideration:
        <ul>
          <li>You can't hardcode the value to 0.</li>
        </ul>
        2. Nothing happens when clicking on the "Add 1" button. Fix it keeping
        in consideration:
        <ul>
          <li>You can't remove memo inside Counter component</li>
          <li>The button must remain inside App component</li>
        </ul>
      </div>

      <div className={`renders ${renders.current < 10 ? "green" : "red"}`}>
        Count of renders:
        {renders.current}
        <button onClick={() => (renders.current = 0)}>Reset count</button>
      </div>

      <div className="time">
        Actual time
        <Time time={actualTime} />
      </div>

      <div className="object">
        <Counter number={counterObject.value} />
        <button onClick={addOneHandler}>Add 1</button>
      </div>
    </div>
  );
}
