const palindromes = function (str) {
  let reversedStr = [];
  // replace punctuation and remove whitespace
  // without whitespace it checks string with multiple word
  let removedPunctuation = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, "");

  // reverse string
  [...removedPunctuation].map((letter) => {
    reversedStr.unshift(letter);
  });
  reversedStr = reversedStr.join("");

  if (removedPunctuation.toLowerCase() === reversedStr.toLowerCase()) {
    return true;
  }

  return false;
};

// Do not edit below this line
module.exports = palindromes;
