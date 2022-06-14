const ftoc = function (fahrenheit) {
  // formula C = (F-32) * (5/9);
  let celsiusValue = (fahrenheit - 32) * (5 / 9);
  return Number.isInteger(celsiusValue)
    ? celsiusValue
    : parseFloat(celsiusValue.toFixed(1));
};

const ctof = function (celsius) {
  // formula F = C * (9/5) + 32
  let fahrenheitValue = celsius * (9 / 5) + 32;
  return Number.isInteger(fahrenheitValue)
    ? fahrenheitValue
    : parseFloat(fahrenheitValue.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
