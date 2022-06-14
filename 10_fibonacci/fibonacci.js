const fibonacci = function(num) {
  let number = parseInt(num);
  if (number <= 0) {
    return "OOPS";
  }

  let fibonacciSeq = [];
  let counter = 0;

  while (fibonacciSeq.length !== number) {
    if (counter > 1) {
      fibonacciSeq.push(fibonacciSeq[counter - 2] + fibonacciSeq[counter - 1]);
    }
    else {
      fibonacciSeq.push(1);
    }
    counter++;
  }
  
  return fibonacciSeq[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
