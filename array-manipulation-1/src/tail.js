/* exported tail */
function tail(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return [];
  }

  const newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }

  return newArray;
}

const originalArray = [1, 2, 3, 4, 5];
const newArray = tail(originalArray);
console.log(newArray);
