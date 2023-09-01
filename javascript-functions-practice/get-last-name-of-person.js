/* exported getLastNameOfPerson */
function getLastNameOfPerson(person) {
  const lastName = person.lastName;
  return lastName;
}
const getLastNameOfPersonResult = getLastNameOfPerson({
  firstName: 'Andrew',
  lastName: 'Ortiz',
});
console.log('the last name of the person is ', getLastNameOfPersonResult);
