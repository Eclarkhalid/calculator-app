export const add = (num1: any, num2: any) => Number(num1) + Number(num2);
export const substract = (num1: any, num2: any) => Number(num1) - Number(num2);

export const multiply = (num1: any, num2: any) => Number(num1) * Number(num2);

export const divide =(num1: any, num2: any) => {
  if (Number(num2) === 0) {
    throw new Error('Cannot divide by zero');
  }

  return Number(num1) / Number(num2);
}