/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
const number = 3;
function isUnderFive(number) {
  return number < 5;
}
console.log('Is under five: ', isUnderFive(number));

function isEven(number) {
  if (number % 2) {
    return false;
  } else {
    return true;
  }
}
console.log('Is even:', isEven(number));

const string = 'Hello';
function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}
console.log('Does it start with J:', startsWithJ(string));

const person = {
  name: 'Andrew Ortiz',
  age: 27,
};
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
console.log('is old enough to drink', isOldEnoughToDrink(person));

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
console.log('is old enough to drive: ', isOldEnoughToDrive(person));

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 16 && person.age >= 21) {
    return false;
  }
}

console.log(
  'is person old enough to drink and drive: ',
  isOldEnoughToDrinkAndDrive(person)
);

const pH = 12;
function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH < 7) {
    return 'base';
  } else if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  }
}
console.log('the pH level of the substance: ', categorizeAcidity(pH));

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the Warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}
console.log('introduce Warner Bros: ', introduceWarnerBro(name));
introduceWarnerBro('wakko');

const genre = {
  action: 'John Wick',
  comedy: 'Step Brothers',
  horror: 'The Exorcist',
  drama: 'Whiplash',
  musical: 'La La Land',
  scifi: 'Dune',
};
function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'John Wick';
    case 'comedy':
      return 'Step Brothers';
    case 'horror':
      return 'The Exorcist';
    case 'drama':
      return 'Whiplash';
    case 'musical':
      return 'La La Land';
    case 'scifi':
      return 'Dune';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi ';
  }
}
console.log('recommend movie:', recommendMovie(genre));
recommendMovie('action');
