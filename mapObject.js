function mapObject(obj, cb) {
  // Like map for arrays, but for objects. Transform the value of each property in turn by passing it to the callback function.
  // http://underscorejs.org/#mapObject

  let result = [];

  for (key in obj) {
    let value = cb(obj[key]);

    result.push(value);
  }

  return result;
}

module.exports = mapObject;
