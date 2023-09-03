/* exported getWords */
function getWords(string) {
  if (string === '' || string.trim() === '') {
    return [];
  }
  const wordsArray = string.split(' ');
  return wordsArray;
}
const text = 'Hello world!';
const words = getWords(text);
console.log(getWords(words));
