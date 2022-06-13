const repeatString = function(string, num) {
  if (num < 0) {
    return "ERROR";
  }

  let output = string.repeat(num);
  return output;
};

// Do not edit below this line
module.exports = repeatString;
