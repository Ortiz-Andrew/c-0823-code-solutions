/* exported initial */
function initial(array) {
  const output = [];
  for (let i = 0; i < array.length - 1; i++) {
    output.push(array[i]);
  }
  return output;
}
const initialArray = initial([0, 1, 2, 3, 4]);
console.log(initialArray);
