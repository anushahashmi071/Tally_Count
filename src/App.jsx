import React, { useState, useEffect } from "react";
import tasbih from "./assets/tasbih.jpg";
import incrementIcon from "./assets/plus.png";
import decrementIcon from "./assets/remove.png";
import refreshIcon from "./assets/refresh.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Sorry, Negative Numbers are not allowed...!!!");
    }
  };
  useEffect(() => {
    const pressKey = (e) => {
      if (e.key === "=" || e.key === "+") {
        setCount((prevCount) => prevCount + 1);
      }
      if (e.key === "-" || e.key === "_") {
        setCount((prevCount) => {
          if (prevCount > 0) {
            return prevCount - 1;
          } else {
            alert("Sorry, Negative Numbers are not allowed...!!!");
            return 0;
          }
        });
      }
      if(e.key === "R" || e.key === "r"){
        setCount((0))
      }
    };
    document.addEventListener("keypress", pressKey);
    return () => {
      document.removeEventListener("keypress", pressKey);
    };
  }, []);

  return (
    <div className="bg-color">
      <img src={tasbih} className="logo" alt="Tasbih Image" />
      <h1>Tally Count</h1>
      <span>
        <em>(Counter)</em>
      </span>
      <p>
        Count your <b>Zikar</b> here..!!
      </p>
      <h2>{count}</h2>
      <button onClick={increment} className="btn increment">
        <img src={incrementIcon} alt="Increment Icon" />
      </button>
      <button onClick={decrement} className="btn decrement">
        <img src={decrementIcon} alt="Decrement Icon" />
      </button>
      <button onClick={() => setCount(0)} className="btn reset">
        <img src={refreshIcon} alt="Refresh Icon" />
      </button>
    </div>
  );
}

export default App;
