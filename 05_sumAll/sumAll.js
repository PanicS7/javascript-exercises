const sumAll = function (num1, num2) {
  let result = 0;

  if (
    typeof num1 === "number" &&
    num1 > 0 &&
    typeof num2 === "number" &&
    num2 > 0
  ) {
    let largerNum = num1 > num2 ? num1 : num2;
    let smallerNum = num1 < num2 ? num1 : num2;

    for (let i = smallerNum; i <= largerNum; i++) {
      result += i;
    }
    return result;
  }

  return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
