/* exported getLastCharacter */
function getLastCharacter(string) {
  const lastIndex = string.length - 1;
  const lastElement = string[lastIndex];
  return lastElement;
}
const getLastCharacterResult = getLastCharacter('he who shall not be named');
console.log('the last character is ', getLastCharacterResult);
