/* exported getFirstElement */
function getFirstElement(array) {
  const arrayFirstNumber = array[0];
  return arrayFirstNumber;
}
const getFirstElementResult = getFirstElement([1, 2, 3, 4]);
console.log('The first element is ', getFirstElementResult);
