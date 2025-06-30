import React, { useState } from 'react';

const Increment = () => {
  const [text, setText] = useState("Red");
  const [digit, setDigit] = useState(0); // New state for the digit

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleIncrement() {
    setDigit(digit + 1);
  }

  function handleDecrement() {
    if (digit > 0) {
      setDigit(digit - 1);
    }
  }

  return (
    <>
      <input
        type="text"
        id="fname"
        name="fname"
        value={text}
        onChange={handleChange}
      />

      <h1>{digit}</h1>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </>
  );
};

export default Increment;
