/* exported reverseWord */
function reverseWord(word) {
  let reversedWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reversedWord += word.charAt(i);
  }
  return reversedWord;
}
const reverWord = reverseWord({
  name: 'Andrew',
  name2: 'David',
  name3: 'Chris',
});
console.log(reverseWord(reverWord));
