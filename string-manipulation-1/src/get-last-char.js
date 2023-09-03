/* exported getLastChar */
function getLastChar(string) {
  const lastChar = string.charAt(string.length - 1);
  return lastChar;
}
const getLastCharResult = getLastChar({
  firstName: 'Andrew',
  lastName: 'Oritz',
  hobby: 'Cars',
});
console.log(getLastCharResult);
