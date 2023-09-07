/* exported isUpperCased */
function isUpperCased(word) {
  return word === word.toUpperCase();
}
const upperCasedWord = isUpperCased({
  name: 'Andrew',
  name2: 'DAVID',
  name3: 'CHRIS',
});
console.log(upperCasedWord);
