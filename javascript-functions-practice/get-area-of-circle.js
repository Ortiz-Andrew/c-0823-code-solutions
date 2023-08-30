/* exported getAreaOfCircle */
function getAreaOfCircle(radius) {
  const area = Math.PI * radius ** 2;
  return area;
}

const myRadius = 5;
const areaOfCircle = getAreaOfCircle(myRadius);
console.log('the area of the cricle is', areaOfCircle);
