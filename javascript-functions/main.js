function convertMintuesToSeconds(minutes) {
  const result = minutes * 60;
  return result;
}
const seconds = convertMintuesToSeconds(5);
console.log('Convert Minutes to Seconds Result:', seconds);

function greet(name) {
  const result = 'hey, ' + name;
  return result;
}
const greetResult = greet('Beavis');
console.log('greet result: ', greetResult);

function getArea(width, height) {
  const result = width * height;
  return result;
}
const getAreaResult = getArea(17, 42);
console.log('the result of the area is ', getAreaResult);

function getFirstName(person) {
  const firstName = person.firstName;
  return firstName;
}
const getFirstNameResult = getFirstName({
  firstName: 'Andrew',
  lastName: 'Ortiz',
});
console.log('the first name is ', getFirstNameResult);

function getLastElement(array) {
  const lastIndex = array.length - 1;
  const lastElement = array[lastIndex];
  return lastElement;
}
const getLastElementResult = getLastElement([
  'propane',
  'and',
  'propane',
  'accessories',
]);
console.log('the result of the last element is ', getLastElementResult);
