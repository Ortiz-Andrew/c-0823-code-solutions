const book = [
  { isbn: '9781421590561', title: 'Tomie', author: 'Junji Ito' },
  { isbn: '9781421561325', title: 'Uzumaki', author: 'Jumji Ito' },
  { isbn: '9781421579153', title: 'Gyo', author: 'Junji Ito' },
];
console.log('book:', book);
console.log('typeof book:', typeof book);

const bookJSON = JSON.stringify(book);
console.log('bookJSON:', bookJSON);
console.log('typeof bookJSON:', typeof bookJSON);

const student = '{"id":"27", "name": "Andrew"}';
console.log('JSON string of student:', student);
console.log('typeof JSON student:', typeof student);

const obj = JSON.parse(student);
console.log('object of student:', obj);
console.log('typeof obj:', typeof obj);
