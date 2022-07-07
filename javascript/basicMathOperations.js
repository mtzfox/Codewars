// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).

// The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2)
{
  switch(operation) {
    case '+': { return value1 + value2; }  
    case '-': { return value1 - value2; }
    case '*': { return value1 * value2; }
    case '/': { return value1 / value2; }
    default: { "Does not match any operation" }
  }
}

// Using optional chaining - not my Codewars answer but it's more fun

function calculate(num1, num2, action) {
    const actions = {
      add: (a, b) => a + b,
      subtract: (a, b) => a - b,
      multiply: (a, b) => a * b,
      divide: (a, b) => a / b,
    };
  
    return actions[action]?.(num1, num2) ?? "Calculation is not recognised";
  }