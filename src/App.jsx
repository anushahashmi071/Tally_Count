import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
    };
    document.addEventListener("keypress", pressKey);
    return () => {
      document.removeEventListener("keypress", pressKey);
    };
  }, []);
  
  // const decrement = () => {
  //   if (count > 0) {
  //     setCount(count - 1);
  //   } else {
  //     alert("Sorry, Negative Numbers are not allowed...!!!");
  //   }
  // };

  return (
    <div className="bg-color">
      <img src="/src/assets/tasbih.jpg" className="logo" alt="Tasbih Image" />
      <h1>Tally Count</h1>
      <span>
        <em>(Counter)</em>
      </span>
      <p>
        Count your <b>Azkar</b> here..!!
      </p>
      <h2>{count}</h2>
      <button className="btn increment">&#43;</button>
      <button onClick={() => setCount - 1} className="btn decrement">
        &#8722;
      </button>
      <button onClick={() => setCount(0)} className="btn reset">
        &#10226;
      </button>
    </div>
  );
}

export default App;
