const student = {
  firstName: 'Andrew ',
  lastName: 'Ortiz',
  age: '27',
};
console.log(student);
const fullName = student.firstName + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'warehouse worker';
console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
const vehicle = {
  make: 'Mazda',
  model: 'Rx7',
  year: '1986',
};
console.log(vehicle);
vehicle['color'] = 'black';
vehicle['isConvertible'] = 'false';
console.log("value of vehicle['color']:", vehicle['color']);
console.log("value of vehicle['isConvertible']:", vehicle['isConvertible']);
const pet = {
  name: 'Avery',
  type: 'bird',
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
