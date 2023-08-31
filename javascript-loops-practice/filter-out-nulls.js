/* exported filterOutNulls */
function filterOutNulls(values) {
  const filteredValues = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filteredValues.push(values[i]);
    }
  }
  return filteredValues;
}
const values = [7, 8, null, 9];
const filteredValues = filterOutNulls(values);
console.log(filteredValues);
