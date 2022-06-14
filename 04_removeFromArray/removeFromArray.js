const removeFromArray = function(array, ...item) {
 let arrayCopy = [...array];

 item.map(i => {
  arrayCopy.indexOf(i) !== -1 && arrayCopy.splice(arrayCopy.indexOf(i), 1);
 })

 return arrayCopy;
};

// Do not edit below this line
module.exports = removeFromArray;
