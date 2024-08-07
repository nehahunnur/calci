import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const operators = ["+", "-", "*", "/"];

  const handleButtonClick = (value) => {
    // Prevent multiple operators in a row
    if (
      operators.includes(value) &&
      (input === "" || operators.includes(input.slice(-1)))
    ) {
      return;
    }

    // Prevent multiple decimals in a single number
    if (
      value === "." &&
      input
        .split(/[\+\-\*\/]/)
        .slice(-1)[0]
        .includes(".")
    ) {
      return;
    }

    setInput(input + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" value={input} readOnly />
      <div className="buttons">
        {[
          "7",
          "8",
          "9",
          "+",
          "4",
          "5",
          "6",
          "-",
          "1",
          "2",
          "3",
          "*",
          "C",
          "0",
          "=",
          "/",
        ].map((button) => (
          <button
            key={button}
            onClick={() =>
              button === "="
                ? handleEqual()
                : button === "C"
                ? handleClear()
                : handleButtonClick(button)
            }
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
