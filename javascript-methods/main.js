const number1 = 5;
const number2 = 10;
const number3 = 15;
const maximumValue = Math.max(number1, number2, number3);
console.log('maximum value: ', maximumValue);

const heros = ['Spiderman', 'Batman', 'Captin America', 'Winter Solider'];

let randomNumber = Math.random();
randomNumber = randomNumber * heros.length;
const randomIndex = Math.floor(randomNumber);
console.log('random index:', randomIndex);
const randomHero = heros[randomIndex];
console.log('random hero:', randomHero);

const libary = [
  { title: 'tomie', author: 'junji ito' },
  { title: 'Abroad in Japan', author: 'Chris Broad' },
  { title: 'The Outsiders', author: 'S.E. Hinton' },
];
const lastBook = libary.pop();
console.log(lastBook);
const firstBook = libary.shift();
console.log('first book:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};

const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
libary.push(js);
libary.unshift(css);
libary.splice(1, 1);
console.log(libary);

const fullName = 'Andrew Ortiz';
const firstAndLastName = fullName.split('  ');
console.log('first and last name', firstAndLastName);
const firstName = firstAndLastName[0];
const saymMyName = firstName.toUpperCase();
console.log('say my name', saymMyName);
