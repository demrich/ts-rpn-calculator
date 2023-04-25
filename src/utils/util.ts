import { Operator } from "./types";

const stack: number[] = [];

const operators: Operator[] = [
    {
      symbol: '+',
      action: (a: number, b: number) => a + b,
    },
    {
      symbol: '-',
      action: (a: number, b: number) => a - b,
    },
    {
      symbol: '*',
      action: (a: number, b: number) => a * b,
    },
    {
      symbol: '/',
      action: (a: number, b: number) => a / b,
    },
  ];

const isOperator = (token: string): boolean => {
    return operators.some((op) => op.symbol === token);
};

const performOperation = (operator: Operator): void  => {
    const [num1, num2] = stack.splice(-2);
    const result = operator.action(num1, num2);
    stack.push(result);
  };

export function evaluateRPN(expression: string): number {  
    const tokens: string[] = expression.split(' ');
    for (const token of tokens) {
      if (isOperator(token)) {
          const operator = operators.find(o => o.symbol === token);
          operator && performOperation(operator);
      } else {
          const convertedToken = parseFloat(token);
          if(isNaN(convertedToken)) {
            throw `Invalid operation: "${token}"`;
          }
          stack.push(convertedToken);
      }
    }
    if (stack.length > 1) {
      const last = stack.slice(-1)[0];
      return last;
    }
    return stack[0];
}
  