/* exported getFirstCharacter */
function getFirstCharacter(string) {
  const firstCharacter = string.charAt(0);
  return firstCharacter;
}
const getFirstCharacterResult = getFirstCharacter('he who shall not be named');
console.log('the first character is ', getFirstCharacterResult);
