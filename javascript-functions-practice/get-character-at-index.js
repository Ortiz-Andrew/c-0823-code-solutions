/* exported getCharacterAtIndex */
function getCharacterAtIndex(string, index) {
  return string[index];
}
const myString = 'he who shall not be named';
const character = getCharacterAtIndex(myString, 17);
console.log(character);
