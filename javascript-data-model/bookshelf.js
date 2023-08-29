const bookshelf = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];
const secondAuthor = bookshelf.author[1];
console.log('the name of the author is ' + bookshelf.author[1]);
const firstIsbn = bookshelf.isbn[0];
console.log('the isbn of the first book is ' + bookshelf.isbn[0]);
const thirdTitle = bookshelf.title[2];
console.log('the name of the third book is ' + bookshelf.title[2]);
