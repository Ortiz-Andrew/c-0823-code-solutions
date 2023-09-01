/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  const { name, occupation, birthPlace } = person;
  return `${name} is a ${occupation} from ${birthPlace}.`;
}

const getDescriptionOfPersonResult = getDescriptionOfPerson({
  name: 'Lea Verou',
  occupation: 'software developer',
  birthPlace: 'Lesbos,Greece',
});

console.log('the description of the person is ', getDescriptionOfPersonResult);
