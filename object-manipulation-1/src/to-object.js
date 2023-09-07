/* exported toObject */
function toObject(keyValuePair) {
  // Check if the input array has exactly two elements
  if (Array.isArray(keyValuePair) && keyValuePair.length === 2) {
    const result = {};
    result[keyValuePair[0]] = keyValuePair[1];

    return result;
  } else {
    return false;
  }
}

const pair = ['name', 'Andrew'];
const obj = toObject(pair);
console.log(obj);
