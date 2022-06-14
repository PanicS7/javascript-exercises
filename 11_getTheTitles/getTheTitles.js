const getTheTitles = function(books) {
  let booksArr = [];
  books.map((book) => {
    booksArr.push(book.title);
  });

  return booksArr;
};

// Do not edit below this line
module.exports = getTheTitles;
