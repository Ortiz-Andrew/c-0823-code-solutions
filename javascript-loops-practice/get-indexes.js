/* exported getIndexes */
function getIndexes(array) {
  const indexes = [];
  for (let i = 0; i < array.length; i++) {
    indexes.push(i);
  }
  return indexes;
}
const inputArray = ['meow', 'woof', 'squeak', 'shazoo'];
const indexesArray = getIndexes(inputArray);
console.log(indexesArray);
