// Return all of the values of the object's own properties.
// Ignore functions
// http://underscorejs.org/#values

function values(obj) {
  const result = [];

  // for in loop is used to iterate over objects.
  // the key gets the key value from the object
  // by using the obj[key] we can retrive the value of any key in the object.

  for (key in obj) {
    result.push(obj[key]);
  }

  return result;
}

module.exports = values;
