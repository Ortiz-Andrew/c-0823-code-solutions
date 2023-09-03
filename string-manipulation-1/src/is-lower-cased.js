/* exported isLowerCased */
function isLowerCased(word) {
  return word === word.toLowerCase();
}
const wordLowCased = isLowerCased({
  name: 'Andrew',
  name2: 'David',
  name3: 'Chris',
});
console.log(wordLowCased);
