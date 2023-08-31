/* exported findIndex */
function findIndex(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}

const numbers = ([9, 8, 3], 4);
const index = (numbers, 4);
console.log(index);
