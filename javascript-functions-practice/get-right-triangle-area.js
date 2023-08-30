/* exported getRightTriangleArea */
function getRightTriangleArea(base, height) {
  const result = (1 / 2) * base * height;
  return result;
}
const getRightTriangleAreaResult = getRightTriangleArea(3, 4);
console.log(
  'the result of the right angle area is ',
  getRightTriangleAreaResult
);
