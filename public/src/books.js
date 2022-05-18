function findAuthorById(authors, id) {
  return authors.find((key) => key.id === id);
}

function findBookById(books, id) {
  return books.find((key) => key.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  const checkedOut = books.filter((book) => book.borrows[0].returned === false);
  const returned = books.filter((book) => book.borrows[0].returned === true);

  return [checkedOut, returned];
}

function getBorrowersForBook(book, accounts) {
  let borrowedList = [];

  book.borrows.forEach((borrow) => {
    accounts.forEach((account) => {
      if (account.id === borrow.id) {
        account.returned = borrow.returned;
        borrowedList.push(account);
      }
    });
  });
  return borrowedList.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
