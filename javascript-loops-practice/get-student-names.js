/* exported getStudentNames */
const students = [{ name: 'Zero Two' }, { name: 'Asuna' }, { name: 'Akame' }];
const studentsNames = getStudentNames(students);
console.log(studentsNames);

function getStudentNames(students) {
  const names = [];
  for (let i = 0; i < students.length; i++) {
    names.push(students[i].name);
  }
  return names;
}
