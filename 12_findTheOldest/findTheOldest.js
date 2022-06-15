const findTheOldest = function (personData) {
  let currentYear = new Date().getFullYear();

  let oldestPerson = personData.reduce((prev, curr) => {
    let prevOld;
    if (prev.hasOwnProperty("yearOfDeath")) {
      prevOld = prev.yearOfDeath - prev.yearOfBirth;
    } else {
      prevOld = currentYear - prev.yearOfBirth;
    }

    let currOld;
    if (curr.hasOwnProperty("yearOfDeath")) {
      currOld = curr.yearOfDeath - curr.yearOfBirth;
    } else {
      prevOld = currentYear - curr.yearOfBirth;
    }

    if (prevOld > currOld) {
      return prev;
    } else {
      return curr;
    }

  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
