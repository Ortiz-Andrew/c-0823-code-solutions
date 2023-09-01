/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const newWords = [];
  for (let i = 0; i < words.length; i++) {
    newWords.push(words[i] + suffix);
  }
  return newWords;
}
const words = ['equal', 'abnormal', 'civil'];
const suffix = 'ity';
const newWords = addSuffixToAll(words, suffix);
console.log(newWords);
