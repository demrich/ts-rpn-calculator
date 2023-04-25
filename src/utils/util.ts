import { Operator } from './types';

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

const performOperation = (
  num1: number,
  num2: number,
  operator: Operator
): number | string => {
  if (operator?.symbol === '/' && num2 === 0) {
    return 'Cannot divide by 0';
  }
  const result = operator.action(num1, num2);
  return result;
};

export function evaluateRPN(expression: string): number | string {
  const tokens: string[] = expression.split(' ');
  for (const token of tokens) {
    if (isOperator(token)) {
      const [num1, num2] = stack.splice(-2);
      if (isNaN(num1) || isNaN(num2)) {
		stack.length = 0;
        return 'Invalid inputs';
      }
      const operator = operators.find((o) => o.symbol === token);
      const result = performOperation(num1, num2, operator!);
      if (typeof result === 'string') {
		stack.length = 0;
        return result;
      }
      stack.push(result);
    } else {
      const convertedToken = parseFloat(token);
      if (isNaN(convertedToken)) {
		stack.length = 0;
        return `Invalid operation: "${token}"`;
      }
      stack.push(convertedToken);
    }
  }
  if (stack.length > 1) {
    const lastItem = stack.slice(-1)[0];
    return lastItem;
  }
  return stack[0];
}
