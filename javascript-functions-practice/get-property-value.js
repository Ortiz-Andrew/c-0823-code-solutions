/* exported getPropertyValue */
function getPropertyValue(object, key) {
  return object[key];
}
const myObject = {
  name: 'Lea Verou',
  occupation: 'software developer',
  birthPlace: 'Lesbos, Greece',
};

const nameValue = getPropertyValue(myObject, 'name');
console.log(nameValue);

const occupationValue = getPropertyValue(myObject, 'occupation');
console.log(occupationValue);
