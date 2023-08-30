/* exported getElementAtIndex */
function getElementAtIndex(array, index) {
  return array[index];
}
const myArray = ['i', 'tell', 'you', 'what'];
const element = getElementAtIndex(myArray, 2);
console.log(element);
