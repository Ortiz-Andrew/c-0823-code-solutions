/* exported getFullNameOfPerson */
function getFullNameOfPerson(person) {
  return person.firstName + ' ' + person.lastName;
}
const getFullNameOfPersonResult = getFullNameOfPerson({
  firstName: 'Andrew',
  lastName: 'Ortiz',
});
console.log('the full name of the person is ', getFullNameOfPersonResult);
