function defaults(obj, defaultProps) {
  // Fill in undefined properties that match properties on the `defaultProps` parameter object.
  // Return `obj`.
  // http://underscorejs.org/#defaults

  // this function is used to override properties whose value is undefined
  // by taking those keys from defaultProperties object.
  for (key in defaultProps) {
    if (obj[key] === undefined) {
      obj[key] = defaultProps[key];
    }
  }

  return obj;
}

module.exports = defaults;
