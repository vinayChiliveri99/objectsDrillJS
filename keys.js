// Retrieve all the names of the object's properties.
// Return the keys as strings in an array.
// Based on http://underscorejs.org/#keys
function keys(obj) {
  const result = [];

  //   The for in loop iterates over a object
  //   Each iteration returns a key (x)
  //   The key is used to access the value of the key
  //   The value of the key is object[x]

  for (key in obj) {
    result.push(key);
  }

  return result;
}

module.exports = keys;
