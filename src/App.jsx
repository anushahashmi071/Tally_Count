import React, { useState } from "react";
import tasbih from "./assets/tasbih.jpg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert("Sorry, Negative Numbers are not allowed...!!!");
    }
  };

  return (
    <div className="bg-color">
      <img src={tasbih} className="logo" alt="Tasbih Image" />
      <h1>Tally Count</h1>
      <p>
        Count your <b>Azkar</b> here..!!
      </p>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)} className="btn increment">
        &#43;
      </button>
      <button onClick={decrement} className="btn decrement">
        &#8722;
      </button>
      <button onClick={() => setCount(0)} className="btn reset">
        &#10226;
      </button>
    </div>
  );
}

export default App;