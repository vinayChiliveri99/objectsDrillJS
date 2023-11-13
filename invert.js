function invert(obj) {
  // Returns a copy of the object where the keys have become the values and the values the keys.
  // Assume that all of the object's values will be unique and string serializable.
  // http://underscorejs.org/#invert

  const invertedObject = {};

  for (key in obj) {
    // obj[key] gives value and that value is treated as key in invertedObject and assigning the key of obj to it
    invertedObject[obj[key]] = key;
  }

  return invertedObject;
}

module.exports = invert;
