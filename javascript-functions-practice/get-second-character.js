/* exported getSecondCharacter */
function getSecondCharacter(string) {
  const secondCharacter = string.charAt(1);
  return secondCharacter;
}
const getSecondCharacterResult = getSecondCharacter(
  'he who shall not be named'
);
console.log('the second character is ', getSecondCharacterResult);
