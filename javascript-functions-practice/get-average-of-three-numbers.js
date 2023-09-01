/* exported getAverageOfThreeNumbers */
function getAverageOfThreeNumbers(x, y, z) {
  const result = (x + y + z) / 3;
  return result;
}
const getAverageOfThreeNumbersResult = getAverageOfThreeNumbers(2, 4, 6);
console.log(
  'the average of the three numbers is',
  getAverageOfThreeNumbersResult
);
