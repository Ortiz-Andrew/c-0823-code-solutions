/* exported last */
function last(array) {
  if (array.length > 0) {
    return array[array.length - 1];
  } else {
    return undefined;
  }
}
const myArray = last([0, 1, 2, 3, 4]);
console.log(myArray);
