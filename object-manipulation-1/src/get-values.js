/* exported getValues */
function getValues(object) {
  const values = [];

  for (const key in object) {
    const value = object[key];

    values[values.length] = value;
  }

  return values;
}
