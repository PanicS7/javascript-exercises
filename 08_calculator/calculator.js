const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  arr.map((num) => {
    sum += num;
  });
  return sum;
};

const multiply = function (arr) {
  let result = 1;
  arr.map((num) => {
    result *= num;
  });
  return result;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }
  if (num === 1) {
    return 1;
  }
  if (num > 1) {
    return num * factorial(num - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
