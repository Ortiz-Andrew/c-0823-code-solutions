/* exported getFirstChar */
function getFirstChar(string) {
  const firstChar = string.charAt(0);
  return firstChar;
}
const getFirstCharResult = getFirstChar({
  firstName: 'Andrew',
  lastName: 'Ortz',
  hobby: 'Cars',
});
console.log(getFirstCharResult);
