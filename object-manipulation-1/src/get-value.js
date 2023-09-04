/* exported getValue */
function getValue(object, key) {
  if (typeof object !== 'object' || object === null) {
    return undefined;
  }
  for (const prop in object) {
    if (prop === key) {
      return object[prop];
    }
  }
  return undefined;
}
