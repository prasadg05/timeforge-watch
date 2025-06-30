import React, { useState } from 'react';


const Exstate = () => {
  const [color, changeText] = useState("red");

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Welcome To {color}!</h1>
      <center>
        <button
          type="button"
          onClick={() => changeText("India")}
        >
          country
        </button>
      </center>
      <center>
        <button
          type="button"
          onClick={() => changeText("Sumago")}
        >
          industry
        </button>
      </center>
      <center>
        <button
          type="button"
          onClick={() => changeText("Maharashtra")}
        >
          state
        </button>
      </center>
      <center>
        <button
          type="button"
          onClick={() => changeText("Nashik")}
        >
          city
        </button>
      </center>
    </>
  );
};

const LiveText = () => {
  const [text, setText] = useState("Red");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input
        type="text"
        id="fname"
        name="fname"
        value={text} // Set the value prop to the state variable
        onChange={handleChange}
      />
      <h1>{text}</h1>
    </>
  );
};


export {LiveText,Exstate} ;
