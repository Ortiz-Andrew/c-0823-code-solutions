/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;

  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }

  return numbers;
}
console.log('Get numbers to ten ()', getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;

  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log('even numbers to twenty', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = '';

  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}
console.log('repeated word:', repeatWord('hello', 30));

function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) console.log(string[i]);
}
console.log('log each character:', logEachCharacter('Asuna'));

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('double all', doubleAll([2, 4, 6]));

const myObject = {
  make: 'Mazda',
  model: 'Rx7',
  year: '1986',
};

function getKeys(object) {
  const keys = [];

  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
const result = getKeys(myObject);
console.log('get keys ({ make:"Mazda", model:"Rx7", year:"1986"}', result);

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log(
  'get values:({ make:"Mazda", model:"Rx7", year:"1986"}',
  getValues(myObject)
);
