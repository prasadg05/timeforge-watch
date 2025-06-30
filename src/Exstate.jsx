import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Exstate() {
  const [color, changeText] = useState("red");
  const [backgroundColor, setBackgroundColor] = useState("white"); 

  function handleColorChange(newColor) {
    changeText(newColor);
  }

  function handleBackgroundChange(newBackgroundColor) {
    setBackgroundColor(newBackgroundColor);
  }

  return (
    <div style={{ backgroundColor }}>
      <h1>
        <center>Welcome To {color}!</center>
      </h1>
      <center>
        <button
          type="button"
          onClick={() => handleColorChange("Red")}
        >
          country
        </button>
      </center>
      <center>
        <button
          type="button"
          onClick={() => handleColorChange("Black")}
        >
          industry
        </button>
      </center>
      <center>
        <button
          type="button"
          onClick={() => handleColorChange("reen")}
        >
          state
        </button>
      </center>
      <center>
        <button
          type="button"
          onClick={() => handleColorChange("Black")}
        >
          city
        </button>
      </center>
      <center>
        <button
          type="button"
           onClick={() => handleBackgroundChange("yellow")}
        >
          Change Background
        </button>
      </center>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Exstate />);
export default Exstate;
