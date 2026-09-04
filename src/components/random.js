import React, { useState } from "react";

function RandomNumberGenerator() {
  const [number, setNumber] = useState(null);

  const handleGenerate = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
  };

  return (
    <div className="section">
      <h2>Random Number Generator</h2>

      {number === null ? (
        <p className="message">No number generated yet</p>
      ) : (
        <h1>{number}</h1>
      )}

      <button onClick={handleGenerate}>Generate Random Number</button>
    </div>
  );
}

export default RandomNumberGenerator;