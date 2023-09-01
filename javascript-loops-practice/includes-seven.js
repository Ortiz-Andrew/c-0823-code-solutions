/* exported includesSeven */
function includesSeven(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      return true;
    }
  }
  return false;
}
const sevenIncluded = [77, 200, 700, '7'];
console.log(includesSeven(sevenIncluded));
