import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleClick = (value: string) => {
    if(value === "=") {
      try{
        setDisplay(eval(display));
      } catch {
        setDisplay("Error");
      }
    } else if (value === "C") {
      setDisplay("");
    } else {
      setDisplay(display + value);
    }
  };
  const buttons = ["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", "0", ".", "=", "+", "C"];
  return <>
  <div className="p-10 grid grid-cols-4 gap-4">
    <Display value={display} />
    {
      buttons.map((button, index) => (
        <Button key={index} value={button} onclick={() => handleClick(button)} />
      ))
    }
  </div>
  </>
}
 
export default Calculator;