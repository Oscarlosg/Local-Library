function findAccountById(accounts, id) {
  return accounts.find((key) => key.id === id);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((lNamea, lNameB) => {
    return lNamea.name.last.toLowerCase() > lNameB.name.last.toLowerCase()
      ? 1
      : -1;
  });
}

function getTotalNumberOfBorrows(account, books) {
  let counter = 0;

  for (const key of books) {
    for (const key2 of key.borrows) {
      if (key2.id === account.id) {
        counter++;
      }
    }
  }
  return counter;
}

function getBooksPossessedByAccount(account, books, authors) {
  const accDetails = account.id;
  const accBooks = books.filter(
    (book) =>
      book.borrows[0].returned === false && accDetails === book.borrows[0].id
  );
  const mappedResult = accBooks.map((key) => ({
    ...key,
    author: authors.find((author) => author.id === key.authorId),
  }));
  return mappedResult;
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
