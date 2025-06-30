import React, { useState } from 'react';

const LiveText = () => {
  const [text, setText] = useState("Red");
  const [show, setShow] = useState("Show");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleClick() {
    setShow(text);
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

      <h1>{show}</h1>
      <button type="button" onClick={handleClick}>
        show
      </button>
    </>
  );
};

export default LiveText;
