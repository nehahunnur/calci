import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const operators = ["+", "-", "*", "/"];

  const handleButtonClick = (value) => {
    if (
      operators.includes(value) &&
      (input === "" || operators.includes(input.slice(-1)))
    ) {
      return;
    }

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
    setResult("");
  };

  const handleEqual = () => {
    try {
      const evalResult = eval(input);
      setResult(evalResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
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
