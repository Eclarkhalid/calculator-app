"use client"

import { useState } from "react";
import Display from "./display";
import Button from "./button";
import { add, substract, multiply, divide } from "@/utils/utils";

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  
  const [firstOperand, setFirstOperand] = useState<number | null>(null); 
  const [currentOperation, setCurrentOperation] = useState<string | null>(null);




  const handleClick = (value: string) => {
    switch (value) {
      case "+":
      case "-":
      case "*":
      case "/":
        if (firstOperand === null) {
          setFirstOperand(parseFloat(display));
        } else if (currentOperation) {
          setFirstOperand(performCalculation());
        }
        setCurrentOperation(value);
        setDisplay(display + value);
        break;
      case "=":
        if (firstOperand !== null && currentOperation) {
          const result = performCalculation();
          setFirstOperand(null);
          setCurrentOperation(null);
          setDisplay(result.toString());
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
    const secondOperandStartIndex = firstOperand.toString().length + 1;
    const secondOperand = parseFloat(display.slice(secondOperandStartIndex));

    switch (currentOperation) {
      case "+":
        return add(parseFloat(firstOperand), secondOperand);
      case "-":
        return substract(parseFloat(firstOperand), secondOperand);
      case "*":
        return multiply(parseFloat(firstOperand), secondOperand);
      case "/":
        try {
          return divide(parseFloat(firstOperand), secondOperand);
        } catch (e) {
          setDisplay(e.message);

        }
        break;
      default:
        break;
    }
  }
  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"];
  return <>
    <div className="p-10 grid grid-cols-4 gap-4 max-w-lg">
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