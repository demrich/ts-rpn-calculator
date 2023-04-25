Documentation for RPN Calculator
================================

Introduction
------------

This is a simple RPN (Reverse Polish Notation) calculator implemented in TypeScript. It uses Node.js's `readline` module to read input from the console and evaluate expressions in RPN.

Installation
------------

1.  Clone or download the repository
2.  Install Node.js if not already installed on your system
3.  Navigate to the project directory in your terminal
4.  Run `npm install` to install the project dependencies

Usage
-----

To start the RPN calculator, run `npm start` in your terminal. You will be prompted to enter an RPN expression to evaluate.

Valid operators include `+`, `-`, `*`, and `/`. The calculator supports decimal numbers.

Example expressions:

-   `2 3 +` evaluates to `5`
-   `10 5 /` evaluates to `2`
-   `3 4 2 * 1 5 - 2 3 2 5 4 * /` evaluates to `0.1`

Expressions can also be added from multiple prompts:
```
> 5
5
> 9
9
> 1
1
> -
8
> /
0.625
```

If an invalid operator is encountered, the calculator will log an error message and stop evaluating the expression.

If the expression is invalid or incomplete, the calculator will log an error message and stop evaluating the expression.

To exit the calculator, press either `Ctrl+C` or `q` in your terminal.

Implementation Details
----------------------

The RPN calculator is implemented in TypeScript, using Node.js's `readline` module to read input from the console.

The `evaluateRPN` function takes an RPN expression as a string and evaluates it using a stack data structure. The function splits the input string into an array of tokens, and iterates over the tokens, pushing numbers onto the stack and performing arithmetic operations on the top two elements of the stack when an operator is encountered.

If the operation is invalid, the function logs an error message. 
If the expression is valid, the function returns the result of the evaluation.

Error Messages
--------------

The RPN calculator logs the following error messages when an error occurs:

-   `"Invalid operator: ${token}"`: when an invalid operator is encountered in the input expression
-   `"Result is NaN"`: when a returned result is a non-number
-   `"Cannot divide by 0"`: when expression is trying to divide by 0
-   `"Invalid inputs"`: when too many operators are presented

Future Improvements
-------------------

-   Support for more operators, such as `^` (exponentiation) and `%` (modulus)
