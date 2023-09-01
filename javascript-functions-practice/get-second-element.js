/* exported getSecondElement */
function getSecondElement(array) {
  const arraySecondElement = array[1];
  return arraySecondElement;
}
// eslint-disable-next-line no-sequences
const getSecondElementResult = getSecondElement[(1, 2, 3, 4)];
console.log('The second element is ', getSecondElementResult);
