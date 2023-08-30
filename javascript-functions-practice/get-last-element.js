/* exported getLastElement */
function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
}
const getLastElementResult = getLastElement(['i', 'tell', 'you', 'what']);
console.log('the last element is ', getLastElementResult);
