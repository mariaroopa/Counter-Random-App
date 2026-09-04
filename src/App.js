import React from "react";
import Counter from "./components/counter";
import RandomNumberGenerator from "./components/random";
import "./style.css";

function App() {
  return (
    <div className="App">
      <h1>Counter & Random Number Generator</h1>
      <Counter />
      <RandomNumberGenerator />
    </div>
  );
}

export default App;