"use client"

import { useState } from "react";
import Display from "./display";
import Button from "./button";
import { add, substract, multiply, divide } from "@/utils/utils";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const [firstOperand, setFirstOperand] = useState(null);
  const [currentOperation, setCurrentOperation] = useState(null);


  const handleClick = (value: string) => {
   switch (value) {
    case "+":
    case "-":
      case "*":
        case "/":
          if (firstOperand === null) {
            setFirstOperand(display);
          } else {
            performCalculation(display);
          }
          setCurrentOperation(value);
          setDisplay(display + value);
          break;
    case "=":
      if (firstOperand !== null && currentOperation) {
        switch (currentOperation) {
          case "+":
            setDisplay(add(firstOperand, display));
            break;
          case "-":
            setDisplay(substract(firstOperand, display));
            break;
          case "*":
            setDisplay(multiply(firstOperand, display));
            break;
          case "/":
            try {
              setDisplay(divide(firstOperand, display));
            } catch (e) {
              setDisplay(e.message);
            }
            break;
            default:
              break;
        }
        setFirstOperand(null);
        setCurrentOperation(null);
      }
      break;

      case "C":
        setDisplay("");
        setFirstOperand(null);
        setCurrentOperation(null);
        break;

        default:
          setDisplay(display + value);
          break;
   }
  };

  const performCalculation = () => {
    switch (currentOperation) {
      case "+":
        setDisplay((prev) => prev.slice(0, -1) + add(firstOperand, display.slice(0, -1)));
        case "-":
        setDisplay((prev) => prev.slice(0, -1) + substract(firstOperand, display.slice(0, -1)));
        case "*":
        setDisplay((prev) => prev.slice(0, -1) + multiply(firstOperand, display.slice(0, -1)));
        case "/":
        try {
          setDisplay((prev) => prev.slice(0, -1) + divide(firstOperand, display.slice(0, -1)));
        } catch (e) {
          setDisplay(e.message);
          
        }
        break;
          default:
            break;
    }
    setFirstOperand(null);
  }
  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"];
  return <>
    <div className="p-10 grid grid-cols-4 gap-4">
      <Display value={display} />
      {
        buttons.map((button, index) => (
          <Button key={index} value={button} onClick={() => handleClick(button)} />
        ))
      }
    </div>
  </>
}

export default Calculator;