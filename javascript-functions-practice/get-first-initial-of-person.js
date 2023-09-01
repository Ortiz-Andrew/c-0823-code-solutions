/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person) {
  return person.firstName.charAt(0);
}

const getFirstInitialOfPersonResult = getFirstInitialOfPerson({
  firstName: 'Lea',
  lastName: 'Verou',
});
console.log(
  'the first initial of the person is ',
  getFirstInitialOfPersonResult
);
