const _lengthCounter = (arg) => arg.length;

const getTotalBooksCount = (books) => _lengthCounter(books);

const getTotalAccountsCount = (accounts) => _lengthCounter(accounts);

function getBooksBorrowedCount(books) {
  let totalBorrowedCount = 0;

  for (const key of books) {
    if (key.borrows[0].returned === false) {
      totalBorrowedCount++;
    }
  }
  return totalBorrowedCount;
}

function getMostCommonGenres(books) {
  const genreCount = books.reduce((total, book) => {
    const foundValue = total.find((key) => book.genre === key.name);
    if (foundValue) {
      foundValue.count++; // foundValue now represents the current iteration { name: 'Science', count: 2 }. ex. so you can tell the function to affect the current iteration by declaring foundvalue.count++
    } else {
      total.push({ name: book.genre, count: 1 });
    }
    const sortedList = total.sort((bookA, bookB) =>
      bookA.count < bookB.count ? 1 : -1
    );
    return sortedList;
  }, []);
  const [first, second, third, fourth, fifth] = genreCount;
  result = [first, second, third, fourth, fifth];
  return result;
  // shows each iteration
  // loop through books arra, find genre of books.
  // if name : book.genre, count : # exist, add +1 to count
  // else add the name : book, count : 1 object into the array
  // add an object into the array each time a new genre is found
  // use Object.entries()
  // sort the array of object from top count to bottom
  // return top 5 items in array using the spread operator
}

function getMostPopularBooks(books) {
  const popularCount = books.map((book) => {
    return { name: book.title, count: book.borrows.length };
  });
  const sortedList = popularCount.sort((bookA, bookB) =>
    bookA.count < bookB.count ? 1 : -1
  );

  [first, second, third, fourth, fifth] = sortedList;
  const result = [first, second, third, fourth, fifth];

  return result;
}

function getMostPopularAuthors(books, authors) {
  const popCount = books.reduce((total, book) => {
    const foundValue = total.find((key) => book.authorId === key.name);
    if (foundValue) {
      foundValue.count += book.borrows.length; // foundValue now represents the current iteration { name: 'Science', count: 2 }. ex. so you can tell the function to affect the current iteration by declaring foundvalue.count++
    } else {
      total.push({ name: book.authorId, count: book.borrows.length });
    }
    const sortedList = total.sort((bookA, bookB) =>
      bookA.count < bookB.count ? 1 : -1
    );
    return sortedList;
  }, []);
  for (const key of popCount) {
    let authorName = authors.find((author) => author.id === key.name);
    const { name } = authorName; // object shorthand
    key.name = `${name.first} ${name.last}`;
  }

  const [first, second, third, fourth, fifth] = popCount;
  const result = [first, second, third, fourth, fifth];
  return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
