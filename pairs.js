function pairs(obj) {
  // Convert an object into a list of [key, value] pairs.
  // http://underscorejs.org/#pairs

  const res = [];

  for (key in obj) {
    let arr = [];
    arr.push(key);
    arr.push(obj[key]);

    res.push(arr);
  }

  return res;
}

module.exports = pairs;
