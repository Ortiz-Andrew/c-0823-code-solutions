/* exported getSumOfSquares */
function getSumOfSquares(x, y) {
  const squareX = x * x;
  const squareY = y * y;
  const sum = squareX + squareY;
  return sum;
}
const getSumOfSquaresResult = getSumOfSquares(3, 4);
console.log('the sum of the square is ', getSumOfSquaresResult);
